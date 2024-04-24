import React from 'react'

import {
  HeroSlice,
  IntroductionSlice,
  LastProjectsSlice,
  PerformedWithSlice,
  LastReviewsSlice,
} from '@/components/slices'
import ScrollToTop from '@/components/buttons/scroll_to_top'
import Footer from '@/components/shared/footer'

export default function Home() {
  return (
    <>
      <div id='home_container'>
        <HeroSlice />
        <IntroductionSlice />
        {/* <LastProjectsSlice /> */}
        <LastReviewsSlice />
        <PerformedWithSlice />
        <Footer />
      </div>
      <div className='scroll_to_top_container'>
        <ScrollToTop />
      </div>
    </>
  )
}
