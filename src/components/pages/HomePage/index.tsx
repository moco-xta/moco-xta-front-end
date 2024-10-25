import React from 'react'

import { HeroSlice, IntroductionSlice } from '@/components/slices'

import './index.scss'

export default function HomePage() {
  return (
    <div>
      <HeroSlice />
      <IntroductionSlice />
    </div>
  )
}
