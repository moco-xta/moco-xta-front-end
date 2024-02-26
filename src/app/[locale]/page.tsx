import React from 'react'

import HeroSlice from '@/components/slices/hero_slice'
import IntroductionSlice from '@/components/slices/introduction_slice'
import PerformedWithSlice from '@/components/slices/performed_with_slice'
import ReviewsSlice from '@/components/slices/reviews_slice'

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
