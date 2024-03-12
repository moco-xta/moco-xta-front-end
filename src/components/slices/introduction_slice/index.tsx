'use client'

import React from 'react'

import { introductionSkillsCardsData } from '@/data/introductionSkillsCardsData'
import { introductionToolsCardsData } from '@/data/introductionToolsCardsData'

import Introduction from '@/components/slices/introduction_slice/introduction'
import IntroductionCards from './introduction_cards'

import './index.scss'

export default function IntroductionSlice() {
  return (
    <div id='introduction_slice_background'>
      <div id='introduction_slice'>
        <div id='introduction_slice_content'>
          <Introduction />
          <IntroductionCards
            data={introductionSkillsCardsData}
            type={'skills'}
          />
          <IntroductionCards
            data={introductionToolsCardsData}
            type={'tools'}
          />
        </div>
      </div>
    </div>
  )
}
