import React from 'react'
import { useTranslations } from 'next-intl'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'

import './index.scss'

export type TPageTitle = {
  id: string
  translationPath: string
}

export default function PageTitle({ id, translationPath }: TPageTitle) {
  const t = useTranslations()

  return (
    <h1 id={id}>
      {capitalizeFirstLetter(t(translationPath))}
    </h1>
  )
}
