import React from 'react'

import TextBlockSimple from '@/components/new/shared/text_blocks/text_block_simple'

import './index.scss'

export default function MainSkills() {
  return (
    <div id='main_skills_container'>
      {['NEXTJS', 'ANGULAR', 'SPRING'].map((key) => (
        <TextBlockSimple
          key={`main_skills_text_block_${key}`}
          title={`HOME.MAIN_SKILLS.MAIN_SKILLS.${key}.TITLE`}
          paragraph={`HOME.MAIN_SKILLS.MAIN_SKILLS.${key}.PARAGRAPH`}
        />
      ))}
    </div>
  )
}
