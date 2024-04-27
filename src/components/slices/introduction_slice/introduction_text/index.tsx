import React from 'react'
import { useTranslations } from 'next-intl'

import RevealTextBlock from '@/components/shared/effects/reveal_text_block'

import { default as effectsConstants } from '@/constants/effectsConstants.json'

import './index.scss'

export default function IntroductionText() {
  const t = useTranslations('HOME')

  return (
    <div id='introduction_text_container'>
      <RevealTextBlock
        threshold={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.THRESHOLD}
        duration={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.DURATION}
        y={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.Y}
      >
        <h2>{t('INTRODUCTION.INTRODUCTION_TITLE')}</h2>
        <p>{t('INTRODUCTION.INTRODUCTION_TEXT')}</p>
      </RevealTextBlock>
    </div>
  )
}
