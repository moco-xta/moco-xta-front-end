import React from 'react'
import { useTranslations } from 'next-intl'

import type { TTitle } from '@/types/components/layout/types'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'

import './index.scss'

export default function SectionSubtitle({ translationPath }: TTitle) {
  const t = useTranslations()

  return <h2 id='section_subtitle'>{capitalizeFirstLetter(t(translationPath))}</h2>
}
