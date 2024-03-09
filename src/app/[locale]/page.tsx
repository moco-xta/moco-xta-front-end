import React from 'react'

import {
  HeroSlice,
  IntroductionSlice,
  PerformedWithSlice,
  ReviewsSlice,
} from '@/components/slices'
import Footer from '@/components/footer'

import './index.scss'

export default function Home() {
  return (
    <div id='home_container'>
      {/* <HeroSlice /> */}
      <IntroductionSlice />
      <ReviewsSlice />
      <PerformedWithSlice />
      <Footer />
    </div>
  )
}
