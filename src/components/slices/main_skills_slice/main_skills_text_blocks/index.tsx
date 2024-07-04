import React from 'react'

import useIsLargeScreen from '@/hooks/useIsLargeScreen'

import { mainSkillsData } from '@/data/main_skills/mainSkillsData'

import TextBlockSimple from '@/components/shared/text_blocks/text_block_simple'

import { isEven } from '@/helpers/mathHelpers'

import './index.scss'

export default function MainSkills() {
  const { isLargeScreen } = useIsLargeScreen()

  return (
    <div id='main_skills_container' /* className='responsive_background' */>
      {mainSkillsData.mainSkills.map((skill, index) => (
        <TextBlockSimple
          key={`main_skills_text_block_${skill.key}`}
          className={`main_skills ${!isLargeScreen ? (isEven(index) ? 'even' : 'odd') : ''}`}
          divStyle={
            isLargeScreen
              ? {}
              : {
                  backgroundImage: `url(${skill.backgroundImage})`,
                }
          }
          title={`HOME.MAIN_SKILLS.MAIN_SKILLS.${skill.key}.TITLE`}
          paragraph={`HOME.MAIN_SKILLS.MAIN_SKILLS.${skill.key}.PARAGRAPH`}
        />
      ))}
    </div>
  )
}
