import React from 'react'

import useResize from '@/hooks/new/useResize'

import { mainSkillsData } from '@/data/main_skills/mainSkillsData'

import TextBlockSimple from '@/components/shared/text_blocks/text_block_simple'

import { isEven } from '@/helpers/new/mathHelpers'

import './index.scss'

export default function MainSkills() {
  const { isDesktop } = useResize()

  return (
    <div id='main_skills_container' /* className='responsive_background' */>
      {mainSkillsData.mainSkills.map((skill, index) => (
        <TextBlockSimple
          key={`main_skills_text_block_${skill.key}`}
          className={`main_skills ${!isDesktop ? (isEven(index) ? 'even' : 'odd') : ''}`}
          divStyle={
            isDesktop
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
