import React from 'react'
import { useTranslations } from 'next-intl'

import './index.scss'

export default function AboutEnterButton() {
  const t = useTranslations('BUTTONS')

  return <button id='about_enter_button'>{t('ENTER')}</button>
}
