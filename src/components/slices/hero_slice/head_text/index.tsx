import React from 'react'
import { useTranslations } from 'next-intl'

/* import RevealTextLetterByLetter from '@/components/shared/effects/reveal_text_letter_by_letter' */
import RevealTextBlock from '@/components/shared/effects/reveal_text_block'

import { default as effectsConstants } from '@/constants/effectsConstants.json'

import './index.scss'

export default function HeadText() {
  const t = useTranslations('HOME')

  return (
    <div id='hero_head_text_container'>
      <RevealTextBlock
        threshold={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.THRESHOLD}
        duration={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.DURATION}
        y={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.Y}
      >
        <h1 id='heading'>
          {/* <RevealTextLetterByLetter text={`${t('HERO.HI_I_AM')} Federico`} /> */}
          {t('HERO.HI_I_AM')}
          <span> Federico</span>
        </h1>
      </RevealTextBlock>
      <RevealTextBlock
        threshold={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.THRESHOLD}
        duration={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.DURATION}
        y={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.Y}
        delay={
          effectsConstants.REVEAL_TEXT_BLOCK.HOME.HERO.HEAD_TEXT.SUBHEADING
            .DELAY
        }
      >
        <h3 id='subheading'>{t('HERO.SUBHEADING')}</h3>
      </RevealTextBlock>
    </div>
  )
}
