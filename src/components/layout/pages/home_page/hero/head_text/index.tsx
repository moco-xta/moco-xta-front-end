import React from 'react'
import { useTranslations } from 'next-intl'

import './index.scss'
import { helveticaNeueBoldFont } from '@/app/fonts/otf'

export default function HeadText() {
  const t = useTranslations('HOME')

  return (
    <div
      id='front_end_developer_container'
      className={`${helveticaNeueBoldFont.className}`}
      dangerouslySetInnerHTML={{ __html: t('HERO.FRONT_END_DEVELOPER') }}
    />
  )
}
