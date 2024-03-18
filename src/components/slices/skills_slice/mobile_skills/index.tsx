import React from 'react'
import { useTranslations } from 'next-intl'

import ThreeDSkillsCanvas from '@/components/r3f/canvas/three_d_skills_canvas'

import './index.scss'

export default function MobileSkills() {
  const t = useTranslations('SKILLS')

  return (
    <div className='skills_block_container'>
      <div className='skills_block_text'>
        <h3>{t('TITLES.MOBILE')}</h3>
        <p className='skills_block_text_paragraph'>{t('PARAGRAPHS.THREE_D')}</p>
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
