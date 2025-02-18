import React from 'react'
import { useTranslations } from 'next-intl'

import './index.scss'

export type TDisclamer = {
  translationKey: string
}

export default function Disclamer({ translationKey }: TDisclamer) {
  const t = useTranslations('DISCLAMERS')

  return (
    <div
      id='disclamer'
      className='disclamer_zIndex'
    >
      {t(translationKey)}
    </div>
  )
}
