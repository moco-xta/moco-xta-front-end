import React from 'react'

import { HeroSlice, IntroductionSlice } from '@/components/slices'

import './index.scss'

export default function HomeOverlay() {
  return (
    <>
      <HeroSlice />
      <IntroductionSlice />
      <div
        className='fullscreen center_content'
        style={{ background: 'Indigo' }}
      >
        TEST
      </div>
    </>
  )
}
