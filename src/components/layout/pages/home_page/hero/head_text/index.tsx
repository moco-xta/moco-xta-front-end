import React from 'react'
import { useTranslations } from 'next-intl'

import './index.scss'
import { helveticaNeueBoldFont } from '@/app/fonts/otf'

export default function HeadText() {
  const t = useTranslations('HOME')

  return (
    <div id='hero_head_text'>
      <div id='front_end_developer_container'
          className={`${helveticaNeueBoldFont.className}`}
          dangerouslySetInnerHTML={{ __html: t('HERO.FRONT_END_DEVELOPER') }}
        />
        <div id='hero_head_text_container'>
          <h1 id='heading'>
            {t('HERO.HI_I_AM')}
            {' '}Federico
          </h1>
          <h3 id='subheading'>{t('HERO.SUBHEADING')}</h3>
        </div>
    </div>
  )
}
