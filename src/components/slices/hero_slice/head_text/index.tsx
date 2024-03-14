import React from 'react'
import { useTranslations } from 'next-intl'

import RevealTextBlock from '@/components/shared/effects/reveal_text_block'

import './index.scss'

export default function HeadText() {
  const t = useTranslations('HOME')

  return (
    <div id='hero_head_text_container'>
      <RevealTextBlock
        threshold={0.75}
        duration={'500ms'}
        y={100}
      >
        <h1 id='heading'>
          {t('HERO.HI_I_AM')}
          <span>Federico</span>
        </h1>
      </RevealTextBlock>
      <RevealTextBlock
        threshold={0.75}
        duration={'500ms'}
        delay={'200ms'}
        y={100}
      >
        <h3 id='subheading'>{t('HERO.SUBHEADING')}</h3>
      </RevealTextBlock>
    </div>
  )
}
