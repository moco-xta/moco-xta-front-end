import React from 'react'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'
import { useTranslations } from 'next-intl'

import { Routes } from '@/routes/routes'

import RevealTextBlock from '@/components/shared/effects/reveal_text_block'

import './index.scss'

export default function SeeAllProjectsLink() {
  const t = useTranslations('HOME')

  return (
    <div id='see_all_projects_link_container'>
      <RevealTextBlock
        y={100}
        duration={'500ms'}
        threshold={0.75}
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
