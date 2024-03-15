import React from 'react'
import { useTranslations } from 'next-intl'

import './index.scss'

export default function Role() {
  const t = useTranslations('HOME')

  return (
    <div id='role_container'>
      <p id='role'>
        <span>{t('HERO.CREATIVE_DEVELOPER.CREATIVE')}</span>
        <span>{t('HERO.CREATIVE_DEVELOPER.DEVELOPER')}</span>
      </p>
    </div>
  )
}
