import React from 'react'
import { useTranslations } from 'next-intl'

import './index.scss'

export default function HeadText() {
  const t = useTranslations('HOME')

  return (
    <div id='hero_head_text'>
      <div
        id='hero_head_text_container'
        className='blur_background_dark'
      >
        <h2 id='heading'>
          {t('HERO.HI_I_AM')}
          <span> Federico</span>
        </h2>
        <h3 id='subheading'>{t('HERO.SUBHEADING')}</h3>
      </div>
      <div id='creative_developer_container'>
        <p>Creative Developer</p>
      </div>
    </div>
  )
}
