'use client'

import React from 'react'

import {
  HeroSlice,
  MainSkillsSlice,
  PerformedWithSlice,
  ReviewsSlice,
} from '@/components/new/slices'
import Footer from '@/components/new/shared/footer'
import ScrollToTop from '@/components/buttons/scroll_to_top'
import NewReviewsSlice from '@/components/new/slices/new_reviews_slice'

export default function Home() {
  return (
    <>
      <div id='home_container'>
        {/* <HeroSlice /> */}
        <MainSkillsSlice />
        <PerformedWithSlice />
        <NewReviewsSlice />
        <Footer />
      </div>
      <div className='scroll_to_top_container'>
        <ScrollToTop />
      </div>
    </>
  )
}
