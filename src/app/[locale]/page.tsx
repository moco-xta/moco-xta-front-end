import React from 'react'

import {
  HeroSlice,
  IntroductionSlice,
  PerformedWithSlice,
  ReviewsSlice,
} from '@/components/slices'

import './index.scss'

export default function Home() {
  return (
    <div id='home_container'>
      <HeroSlice />
      <IntroductionSlice />
      <ReviewsSlice />
      <PerformedWithSlice />
    </div>
  )
}
