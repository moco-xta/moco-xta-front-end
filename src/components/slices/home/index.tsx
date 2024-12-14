import React from 'react'

import { GSAPTimelineProvider } from 'contexts/GSAPTimelineContext'

import HeroSlice from './hero_slice'
// import ContactSlice from './contact_slice'

import { default as heroConstants } from '@/constants/animations/home/hero/heroConstants.json'

export default function HomePage() {
  return (
    <>
      <GSAPTimelineProvider
        delay={heroConstants.DELAY}
        timeScale={heroConstants.TIME_SCALE}
        labels={heroConstants.LABELS}
      >
        <HeroSlice />
      </GSAPTimelineProvider>
      {/* <ContactSlice /> */}
    </>
  )
}
