'use client'

import React from 'react'

import { introductionSkillCardsData } from '@/data/introductionSkillCardsData'

import Introduction from '@/components/slices/introduction_slice/introduction'

import './index.scss'
import IntroductionCardCanvas from '@/components/r3f/canvas/introduction_card_canvas'

export default function IntroductionSlice() {
  return (
    <div id='introduction_slice_background'>
      <div id='introduction_slice'>
        <div id='introduction_slice_content'>
          <Introduction />
          <div id='introduction_cards_container'>
            {introductionSkillCardsData.map((content, index) => {
              return (
                <div key={`introduction_card_container_${index}`} className='introduction_card_canvas_container'>
                  <IntroductionCardCanvas
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
