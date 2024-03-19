import React from 'react'
import { useTranslations } from 'next-intl'

import RevealTextBlock from '@/components/shared/effects/reveal_text_block'

import { default as effectsConstants } from '@/constants/effectsConstants.json'

import './index.scss'

export default function LastProjectsText() {
  const t = useTranslations('HOME')

  return (
    <div id='last_projects_text_container'>
      <RevealTextBlock
        threshold={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.THRESHOLD}
        duration={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.DURATION}
        y={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.Y}
      >
        <h2>{t('PROJECTS.TITLE')}</h2>
      </RevealTextBlock>

      <RevealTextBlock
        threshold={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.THRESHOLD}
        duration={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.DURATION}
        y={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.Y}
      >
        <p>{t('PROJECTS.TEXT')}</p>
      </RevealTextBlock>
    </div>
  )
}
