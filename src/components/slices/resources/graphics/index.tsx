import React from 'react'
import { useTranslations } from 'next-intl'

import { SectionTitle } from '@/components/layout/titles'

import './index.scss'

export default function Graphics() {
  const t = useTranslations('RESOURCES.GRAPHICS')

  return (
    <section
      id='resources_graphics_section'
      className='section'
    >
      <SectionTitle text={'Front-End'} />
    </section>
  )
}
