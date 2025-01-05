import React from 'react'
import { useTranslations } from 'next-intl'

import { PageTitle } from '@/components/layout/titles'

import './index.scss'

export default function Introduction() {
  const t = useTranslations('RESOURCES')

  return (
    <section
      id='resources_introduction_section'
      // className='section'
    >
      <PageTitle text={t('RESOURCES')} />
    </section>
  )
}
