import React from 'react'

import { GSAPTimelineProvider } from 'contexts/GSAPTimelineContext'

import HeroSlice from './hero_slice'
// import ContactSlice from './contact_slice'

import { heroTimelineData } from '@/data/hero/heroTimelineData'

export default function HomePage() {
  return (
    <>
      <GSAPTimelineProvider
        delay={heroTimelineData.delay}
        timeScale={heroTimelineData.timeScale}
        labels={heroTimelineData.labels}
      >
        <HeroSlice />
      </GSAPTimelineProvider>
      {/* <ContactSlice /> */}
    </>
  )
}
