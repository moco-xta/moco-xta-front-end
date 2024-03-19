import React from 'react'
import { useTranslations } from 'next-intl'

import RevealTextBlock from '@/components/shared/effects/reveal_text_block'
import InternalLink from '@/components/links/internal_link'

import { default as effectsConstants } from '@/constants/effectsConstants.json'

import './index.scss'

export default function MainSkillsText() {
  const t = useTranslations('HOME')

  return (
    <div id='main_skills_text_container'>
      <RevealTextBlock
        threshold={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.THRESHOLD}
        duration={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.DURATION}
        y={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.Y}
      >
        <h2>{t('INTRODUCTION.MAIN_SKILLS_TITLE')}</h2>
      </RevealTextBlock>

      <RevealTextBlock
        threshold={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.THRESHOLD}
        duration={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.DURATION}
        y={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.Y}
      >
        <p>{t('INTRODUCTION.MAIN_SKILLS_TEXT')}</p>
      </RevealTextBlock>

      <RevealTextBlock
        threshold={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.THRESHOLD}
        duration={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.DURATION}
        y={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.Y}
      >
        <InternalLink
          routeKey={'SKILLS'}
          translationKey={'HOME.INTRODUCTION.SEE_MORE'}
        />
      </RevealTextBlock>
    </div>
  )
}
