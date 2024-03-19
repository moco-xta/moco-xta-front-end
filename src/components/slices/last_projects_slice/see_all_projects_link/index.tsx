import React from 'react'

import RevealTextBlock from '@/components/shared/effects/reveal_text_block'
import InternalLink from '@/components/links/internal_link'

import { default as effectsConstants } from '@/constants/effectsConstants.json'

import './index.scss'

export default function SeeAllProjectsLink() {
  return (
    <div id='see_all_projects_link_container'>
      <RevealTextBlock
        threshold={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.THRESHOLD}
        duration={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.DURATION}
        y={effectsConstants.REVEAL_TEXT_BLOCK.DEFAULT.Y}
      >
        <InternalLink
          routeKey={'PROJECTS'}
          translationKey={'HOME.LAST_PROJECTS.SEE_ALL_PROJECTS'}
        />
      </RevealTextBlock>
    </div>
  )
}
