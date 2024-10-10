'use client'

import React from 'react'

import { HeroSlice, HomeSlice, MainSkillsSlice, PerformedWithSlice, ReviewsSlice } from '@/components/slices'
import Footer from '@/components/shared/footer'
import ScrollToTop from '@/components/buttons/scroll_to_top'

import './index.scss'

export default function Home() {
  return (
    <>
      {/* <div id='home_page'> */}
      <HomeSlice />
      {/* <MainSkillsSlice />
        <PerformedWithSlice />
        <ReviewsSlice />
        <Footer />
      </div> */}
      {/* <div className='scroll_to_top_container'>
        <ScrollToTop />
      </div> */}
      {/* <Footer /> */}
    </>
  )
}
