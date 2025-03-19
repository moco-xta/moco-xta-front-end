import React from 'react'
import { useTranslations } from 'next-intl'

import './index.scss'

export default function LastProjects() {
  const t = useTranslations('HOME.LAST_PROJECTS')

  return (
    <section
      id='last_projects_section'
      className='section_title'
    >
      {t('SECTION_TITLE')}
    </section>
  )
}
