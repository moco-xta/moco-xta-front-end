import React from 'react'

import { GSAPTimelineProvider } from '@/contexts/GsapTimelineContext'

import { HeroCanvas } from '@/components/three/canvas'

import { timelineDefaultValues } from '@/data/hero/timelineData'

import './index.scss'

export default function HomePage() {
  return (
    <div id='home_page'>
      <GSAPTimelineProvider {...timelineDefaultValues}>
        <HeroCanvas />
      </GSAPTimelineProvider>
    </div>
  )
}
