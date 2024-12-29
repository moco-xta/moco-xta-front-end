import React from 'react'

import { GSAPTimelineProvider } from 'contexts/GSAPTimelineContext'

import HeroSlice from './hero_slice'
// import ContactSlice from './contact_slice'

import { timelineDefaultValues } from '@/data/home/hero/timelineData'

export default function HomePage() {
  return (
    <>
      <GSAPTimelineProvider {...timelineDefaultValues}>
        <HeroSlice />
      </GSAPTimelineProvider>
      {/* <ContactSlice /> */}
    </>
  )
}
