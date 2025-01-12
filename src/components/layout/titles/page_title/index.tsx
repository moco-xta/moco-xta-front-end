import React from 'react'
import { useTranslations } from 'next-intl'

import type { TTitle } from '@/types/components/layout/types'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'

import './index.scss'

export default function PageTitle({ translationPath }: TTitle) {
  const t = useTranslations()

  return (
    <h1
      id='page_title'
      className='pc_item'
    >
      {capitalizeFirstLetter(t(translationPath))}
    </h1>
  )
}
