import React from 'react'
import { useTranslations } from 'next-intl'

import type { TTitle } from '@/types/components/layout/types'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'

import './index.scss'

export default function ParagraphTitle({ translationPath }: TTitle) {
  const t = useTranslations()

  return <h2 className='pc_item paragraph_title'>{capitalizeFirstLetter(t(translationPath))}</h2>
}
