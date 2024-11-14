import React from 'react'

import HeroSlice from './hero_slice'
import IntroductionSlice from './introduction_slice'

import './index.scss'

export default function HomeOverlay() {
  return (
    <>
      <HeroSlice />
      <IntroductionSlice />
    </>
  )
}
