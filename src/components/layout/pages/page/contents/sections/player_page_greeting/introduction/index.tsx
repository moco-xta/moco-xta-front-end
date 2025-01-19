import React from 'react'
import { useTranslations } from 'next-intl'

import type { TPlayerPageIntroduction } from '@/types/components/layout/types'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'

import './index.scss'

export default function PlayerPageIntroduction({ translationPath }: TPlayerPageIntroduction) {
  const t = useTranslations(`${translationPath}.INTRODUCTION`)

  return (
    <div className='player_page_introduction'>
      <h1 className='player_page_introduction_title'>{capitalizeFirstLetter(t('TITLE'))}</h1>
      <p className='player_page_introduction_text'>{capitalizeFirstLetter(t('INTRODUCTION'))}</p>
    </div>
  )
}
