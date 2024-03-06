'use client'

import React from 'react'

import Introduction from '@/components/slices/introduction_slice/introduction'
import IntroductionCards from '@/components/slices/introduction_slice/introduction_cards'

import './index.scss'

export default function IntroductionSlice() {
  return (
    <div id='introduction_slice_background'>
      <div id='introduction_slice'>
        <div id='introduction_slice_content'>
          <Introduction />
          <IntroductionCards />
        </div>
      </div>
    </div>
  )
}
