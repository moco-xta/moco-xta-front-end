import React from 'react'
import { useTranslations } from 'next-intl'

import RevealTextBlock from '@/components/shared/effects/reveal_text_block'

import { default as effectsConstants } from '@/constants/effectsConstants.json'

import './index.scss'

export default function IntroductionText() {
  const t = useTranslations('HOME')

  return (
    <div id='introduction_text_container'>
      <h2>{t('INTRODUCTION.INTRODUCTION_TITLE')}</h2>
      <p>{t('INTRODUCTION.INTRODUCTION_TEXT')}</p>
    </div>
  )
}
