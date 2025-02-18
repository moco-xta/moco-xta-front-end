import React from 'react'
import { useTranslations } from 'next-intl'

import './index.scss'

export default function Disclamer() {
  const t = useTranslations('DISCLAMERS.HOME')

  return (
    <div
      id='disclamer'
      className='disclamer_zIndex'
    >
      {t('IS_MOBILE')}
    </div>
  )
}
