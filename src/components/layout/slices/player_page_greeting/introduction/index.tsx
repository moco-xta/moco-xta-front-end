import React from 'react'
import { useTranslations } from 'next-intl'

import type { TPlayerPageIntroduction } from '@/types/components/layout/types'

import { capitalizeFirstLetter } from '@/helpers/textHelpers'

import './index.scss'
import SectionTitle from '@/components/layout/titles/section_title'

export default function PlayerPageIntroduction({ translationPath }: TPlayerPageIntroduction) {
  const t = useTranslations(`${translationPath}.INTRODUCTION`)

  return (
    <div className='player_page_introduction'>
      <SectionTitle title={capitalizeFirstLetter(t('TITLE'))} />
      <div className='player_page_introduction_text'>
        {t.rich('INTRODUCTION', {
          p: (chunk) => <p className='pc_item home_made'>{chunk}</p>,
        })}
      </div>
    </div>
  )
}
