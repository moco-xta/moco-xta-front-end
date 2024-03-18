import React from 'react'
import { useTranslations } from 'next-intl'

import ThreeDSkillsCanvas from '@/components/r3f/canvas/three_d_skills_canvas'

import './index.scss'

export default function BackEndSkills() {
  const t = useTranslations('SKILLS')

  return (
    <div className='skills_block_container'>
      <div className='skills_block_text'>
        <h3>Back-end</h3>
        <p className='skills_block_text_paragraph'>{t('PARAGRAPHS.BACK_END')}</p>
      </div>
      <div className='skills_separator'/>
      <div className='skills_canvas_container'>
        <ThreeDSkillsCanvas />
      </div>
    </div>
  )
}
