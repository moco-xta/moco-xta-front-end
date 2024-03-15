import React from 'react'

import {
  HeroSlice,
  IntroductionSlice,
  LastProjectsSlice,
  PerformedWithSlice,
  ReviewsSlice,
} from '@/components/slices'
import ScrollToTop from '@/components/buttons/scroll_to_top'
import Footer from '@/components/shared/footer'

import './index.scss'

export default function Home() {
  return (
    <>
      <div id='home_container'>
        <HeroSlice />
        {/* <IntroductionSlice />
        <LastProjectsSlice />
        <ReviewsSlice />
        <PerformedWithSlice />
        <Footer /> */}
      </div>
      <div className='scroll_to_top_container'>
        <ScrollToTop />
      </div>
    </>
  )
}
