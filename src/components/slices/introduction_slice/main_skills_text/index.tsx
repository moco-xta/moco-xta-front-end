import React from 'react'
import { useTranslations } from 'next-intl'

import RevealTextBlock from '@/components/shared/effects/reveal_text_block'

import './index.scss'

export default function MainSkillsText() {
  const t = useTranslations('HOME')

  return (
    <div id='main_skills_text_container'>
      <RevealTextBlock
        y={100}
        duration={'500ms'}
        threshold={0.75}
      >
        <h2>
          {t('INTRODUCTION.MAIN_SKILLS_TITLE')}
        </h2>
      </RevealTextBlock>

      <RevealTextBlock
        y={100}
        duration={'500ms'}
        threshold={0.75}
      >
        <p>{t('INTRODUCTION.MAIN_SKILLS_TEXT')}</p>
      </RevealTextBlock>
    </div>
  )
}
