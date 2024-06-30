import React from 'react'
import localFont from 'next/font/local'
import { useTranslations } from 'next-intl'

import './index.scss'
const HelveticaNeueBlack = localFont({
  src: './HelveticaNeueBlack.otf',
})

export default function FrontEndDeveloper() {
  const t = useTranslations('HOME')

  return (
    <div
      id='front_end_developer'
      className={`${HelveticaNeueBlack.className}`}
    >
      {t('HERO.FRONT_END_DEVELOPER')}
    </div>
  )
}
