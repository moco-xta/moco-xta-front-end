import React from 'react'
import { useTranslations } from 'next-intl'

import ThreeDSkillsCanvas from '@/components/r3f/canvas/three_d_skills_canvas'

import './index.scss'

export default function FrontEndSkills() {
  const t = useTranslations('SKILLS')

  return (
    <div className='skills_block_container'>
      <div className='skills_block_text'>
        <h3>Front-end</h3>
        <p className='skills_block_text_paragraph'>
          {t('PARAGRAPHS.FRONT_END')}
        </p>
      </div>
      <div className='skills_separator'>
        <div className='dot' />
      </div>
      <div className='skills_canvas_container'>
        <ThreeDSkillsCanvas />
      </div>
    </div>
  )
}
