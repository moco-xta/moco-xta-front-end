'use client'

import React from 'react'

import Introduction from '@/components/slices/introduction_slice/introduction'

import './index.scss'
import IntroductionCards from './introduction_cards'

export default function IntroductionSlice() {
  return (
    <div id='introduction_slice_background'>
      <div id='introduction_slice'>
        <div id='introduction_slice_content'>
          <Introduction />
          {/* <IntroductionCards /> */}
        </div>
      </div>
    </div>
  )
}
