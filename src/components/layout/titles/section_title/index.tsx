import React from 'react'
import { useTranslations } from 'next-intl'

import type { TTitle } from '@/types/components/layout/types'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'

import './index.scss'

export default function SectionTitle({ title, translationPath }: TTitle) {
  const t = useTranslations()

  return (
    <h2
      id='section_title'
      className='pc_item'
    >
      {capitalizeFirstLetter(title ? title : t(translationPath))}
    </h2>
  )
}
