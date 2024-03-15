'use client'

import React from 'react'

import { introductionSkillsCardsData } from '@/data/introductionSkillsCardsData'
import { introductionToolsCardsData } from '@/data/introductionToolsCardsData'

import IntroductionText from './introduction_text'
import IntroductionCards from './introduction_cards'
import MainSkillsText from './main_skills_text'

import './index.scss'

export default function IntroductionSlice() {
  return (
    <section id='introduction_slice'>
      <div id='introduction_content'>
        <div id='introduction_container'>
          <IntroductionText />
          <IntroductionCards
            data={introductionSkillsCardsData}
            type={'skills'}
          />
        </div>
        <div id='main_skills_container'>
          <IntroductionCards
            data={introductionToolsCardsData}
            type={'tools'}
          />
          <MainSkillsText />
        </div>
      </div>
    </section>
  )
}
