import React from 'react'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'
import { useTranslations } from 'next-intl'

import { Routes } from '@/routes/routes'

import RevealTextBlock from '@/components/shared/effects/reveal_text_block'

import { default as effectsConstants } from '@/constants/effectsConstants.json'

import './index.scss'

export default function SeeAllProjectsLink() {
  const t = useTranslations('HOME')

  return (
    <div id='see_all_projects_link_container'>
      <RevealTextBlock
        threshold={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.THRESHOLD}
        duration={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.DURATION}
        y={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.Y}
      >
        <Link
          id='see_all_projects_link'
          href={Routes.find((route) => route.key === 'PROJECTS')!.path}
        >
          <span id='see_all_projects_link_text'>
            {t('PROJECTS.SEE_ALL_PROJECTS')}
          </span>
          <FaArrowRight />
        </Link>
      </RevealTextBlock>
    </div>
  )
}
