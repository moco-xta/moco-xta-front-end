import React from 'react'

import HeroSlice from './hero_slice'
import IntroductionSlice from './introduction_slice'
import MainSkillsSlice from './main_skills_slice'
import PerformedWithSlice from './performed_with_slice'

import './index.scss'

export default function HomeOverlay() {
  return (
    <>
      <HeroSlice />
      <IntroductionSlice />
      <MainSkillsSlice />
      <PerformedWithSlice />
    </>
  )
}
