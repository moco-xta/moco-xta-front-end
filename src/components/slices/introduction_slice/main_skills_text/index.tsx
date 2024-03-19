import React from 'react'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'
import { useTranslations } from 'next-intl'

import { Routes } from '@/routes/routes'

import RevealTextBlock from '@/components/shared/effects/reveal_text_block'

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
        <Link
          id='view_more_link'
          href={Routes.find((route) => route.key === 'SKILLS')!.path}
        >
          <span id='view_more_link_text'>{t('INTRODUCTION.SEE_MORE')}</span>
          <FaArrowRight />
        </Link>
      </RevealTextBlock>
    </div>
  )
}
