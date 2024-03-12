'use client'

import React from 'react'

import { introductionSkillCardsData } from '@/data/introductionSkillCardsData'

import Introduction from '@/components/slices/introduction_slice/introduction'
import IntroductionCardCanvas from '@/components/r3f/canvas/introduction_card_canvas'

import './index.scss'

export default function IntroductionSlice() {
  return (
    <div id='introduction_slice_background'>
      <div id='introduction_slice'>
        <div id='introduction_slice_content'>
          <Introduction />
          <div id='introduction_skills_cards_container'>
            {introductionSkillCardsData.map((content, index) => {
              return (
                <div
                  key={`introduction_skills_card_container_${index}`}
                  className='introduction_skills_card_canvas_container'
                >
                  <IntroductionCardCanvas content={content} />
                </div>
              )
            })}
          </div>
          <div id='introduction_tools_cards_container'>
            {introductionSkillCardsData.map((content, index) => {
              return (
                <div
                  key={`introduction_tools_card_container_${index}`}
                  className='introduction_tools_card_canvas_container'
                >
                  <IntroductionCardCanvas content={content} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
