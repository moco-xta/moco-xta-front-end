import React from 'react'

import { GSAPTimelineProvider } from 'contexts/GSAPTimelineContext'

import HeroSlice from './hero_slice'
// import ContactSlice from './contact_slice'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'

export default function HomePage() {
  return (
    <>
      <GSAPTimelineProvider
        delay={heroAnimationsConstants.DELAY}
        speed={heroAnimationsConstants.SPEED}
      >
        <HeroSlice />
      </GSAPTimelineProvider>
      {/* <ContactSlice /> */}
    </>
  )
}
