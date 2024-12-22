import React from 'react'

import { GSAPTimelineProvider } from 'contexts/GSAPTimelineContext'

import HeroSlice from './hero_slice'
// import ContactSlice from './contact_slice'

import { timelineData } from '@/data/home/hero/timelineData'

export default function HomePage() {
  return (
    <>
      <GSAPTimelineProvider
        delay={timelineData.delay}
        timeScale={timelineData.timeScale}
        labels={timelineData.labels}
      >
        <HeroSlice />
      </GSAPTimelineProvider>
      {/* <ContactSlice /> */}
    </>
  )
}
