import React from 'react'
import { useTranslations } from 'next-intl'

import RevealTextBlock from '@/components/shared/effects/reveal_text_block'

import './index.scss'

export default function IntroductionText() {
  const t = useTranslations('HOME')

  return (
    <div id='introduction_text_container'>
      <RevealTextBlock
        y={100}
        duration={'500ms'}
        threshold={0.75}
      >
        <h2>
          {t('INTRODUCTION.INTRODUCTION_TITLE')}
        </h2>
      </RevealTextBlock>

      <RevealTextBlock
        y={100}
        duration={'500ms'}
        threshold={0.75}
      >
        <p>{t('INTRODUCTION.INTRODUCTION_TEXT')}</p>
      </RevealTextBlock>
    </div>
  )
}
