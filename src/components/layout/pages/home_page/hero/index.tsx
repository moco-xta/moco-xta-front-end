import React from 'react'

import { GSAPTimelineProvider } from '@/contexts/GsapTimelineContext'

import AnimationControls from '@/components/layout/buttons/animation_controls'
import { HeroCanvas, PlaygroundCanvas } from '@/components/three/canvas'

import { timelineDefaultValues } from '@/data/hero/timelineData'

import './index.scss'

export default function Hero() {
  return (
    <GSAPTimelineProvider {...timelineDefaultValues}>
      <div id='hero_container'>
        {/* <HeroCanvas /> */}
        <PlaygroundCanvas />
        {/* <AnimationControls /> */}
      </div>
    </GSAPTimelineProvider>
  )
}
