import React from 'react'
import { useTranslations } from 'next-intl'

import './index.scss'

export default function MainSkills() {
  const t = useTranslations('HOME.MAIN_SKILLS')

  return (
    <section id='main_skills_section'>
      <p className='section_title'>{t('SECTION_TITLE')}</p>
    </section>
  )
}
