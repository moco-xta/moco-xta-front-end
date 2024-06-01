'use client'

import React from 'react'

import {
  HeroSlice,
  MainSkillsSlice,
  PerformedWithSlice,
  ReviewsSliceNew,
} from '@/components/new/slices'
import Footer from '@/components/new/shared/footer'
import ScrollToTop from '@/components/buttons/scroll_to_top'

import './index.scss'

export default function Home() {
  return (
    <>
      <div id='home_page'>
        {/* <HeroSlice /> */}
        {/* <MainSkillsSlice /> */}
        {/* <PerformedWithSlice /> */}
        <ReviewsSliceNew />
        {/* <Footer /> */}
      </div>
      <div className='scroll_to_top_container'>
        <ScrollToTop />
      </div>
    </>
  )
}
