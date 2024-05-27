import React from 'react'

import useResize from '@/hooks/new/useResize'

import { mainSkillsData } from '@/data/new/mainSkillsData'

import TextBlockSimple from '@/components/new/shared/text_blocks/text_block_simple'

import { isEven } from '@/helpers/new/mathHelpers'

import './index.scss'

export default function MainSkills() {
  const { isDesktop } = useResize()

  return (
    <div id='main_skills_container'>
      {mainSkillsData.mainSkills.map((skill, index) => (
        <TextBlockSimple
          key={`main_skills_text_block_${skill.key}`}
          title={`HOME.MAIN_SKILLS.MAIN_SKILLS.${skill.key}.TITLE`}
          paragraph={`HOME.MAIN_SKILLS.MAIN_SKILLS.${skill.key}.PARAGRAPH`}
          blockStyle={
            isDesktop
              ? {}
              : {
                  height: '60vh',
                  padding: `0 ${isEven(index) ? '20%' : '50%'} 0 ${isEven(index) ? '50%' : '20%'}`, // TODO: MARGIN VARIABLE
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundImage: `url(${skill.backgroundImage})`,
                  backgroundSize: 'contain',
                  backgroundPositionX: isEven(index) ? 'left' : 'right',
                  backgroundRepeat: 'no-repeat'
                }
          }
        />
      ))}
    </div>
  )
}
