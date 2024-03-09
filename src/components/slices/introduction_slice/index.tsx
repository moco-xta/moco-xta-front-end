'use client'

import React from 'react'

import { introductionSkillCardsData } from '@/data/introductionSkillCardsData'

import Introduction from '@/components/slices/introduction_slice/introduction'
import IntroductionCard from '@/components/r3f/models/cards/introduction_card'

import './index.scss'
import IntroductionCardCanvas from '@/components/r3f/canvas/introduction_card_canvas'

export default function IntroductionSlice() {
  return (
    <div id='introduction_slice_background'>
      <div id='introduction_slice'>
        <div id='introduction_slice_content'>
          <Introduction />
          <div id='introduction_cards_wrapper'>
            {introductionSkillCardsData.map((content, index) => {
              return (
                <div className='introduction_card_canvas_container'>
                  <IntroductionCardCanvas
                    key={`introductionCard_${index}`}
                    content={content}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
