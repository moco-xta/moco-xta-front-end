'use client'

import React from 'react'

import {
  HeroSlice,
  MainSkillsSlice,
  PerformedWithSlice,
  ReviewsSlice,
} from '@/components/new/slices'
import ScrollToTop from '@/components/buttons/scroll_to_top'

export default function Home() {
  return (
    <>
      <div id='home_container'>
        {/* <HeroSlice />
        <MainSkillsSlice />
        <PerformedWithSlice /> */}
        <ReviewsSlice />
      </div>
      <div className='scroll_to_top_container'>
        <ScrollToTop />
      </div>
    </>
  )
}
