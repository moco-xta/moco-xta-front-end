import React from 'react'
import { useTranslations } from 'next-intl'

import RevealTextBlock from '@/components/shared/effects/reveal_text_block'

import './index.scss'

export default function LastProjectsText() {
  const t = useTranslations('HOME')

  return (
    <div id='last_projects_text_container'>
      <RevealTextBlock
        y={100}
        duration={'500ms'}
        threshold={0.75}
      >
        <h2>{t('PROJECTS.TITLE')}</h2>
      </RevealTextBlock>

      <RevealTextBlock
        y={100}
        duration={'500ms'}
        threshold={0.75}
      >
        <p>{t('PROJECTS.TEXT')}</p>
      </RevealTextBlock>
    </div>
  )
}
