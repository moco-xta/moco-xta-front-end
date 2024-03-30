'use client'

import React from 'react'

import { introductionCardsData } from '@/data/introductionCardsData'
import { mainSkillsCardsData } from '@/data/mainSkillsCardsData'

import IntroductionCanvas from '@/components/r3f/canvas/introduction_canvas'
import IntroductionText from './introduction_text'
import IntroductionCards from './introduction_cards'
import MainSkillsText from './main_skills_text'

import './index.scss'

export default function IntroductionSlice() {
  return (
    <section id='introduction_slice'>
      {/* <div id='introduction_canvas_container'>
        <IntroductionCanvas />
      </div> */}
      <div id='introduction_content'>
        <div id='introduction_container'>
          <IntroductionText />
          <IntroductionCards
            data={introductionCardsData}
            type={'skills'}
          />
        </div>
        <div id='main_skills_container'>
          <IntroductionCards
            data={mainSkillsCardsData}
            type={'tools'}
          />
          <MainSkillsText />
        </div>
      </div>
    </section>
  )
}
