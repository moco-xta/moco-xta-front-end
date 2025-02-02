import React from 'react'

import { GSAPTimelineProvider } from '@/contexts/GsapTimelineContext'

import AnimationControls from '@/components/layout/buttons/animation_controls'
import { HeroCanvas } from '@/components/three/canvas'
import {
  AsciiWithWebgpuCanvas,
  ParametricLinearRgbDimmerCanvas,
  PlaygroundCanvas,
} from '@/components/three/canvas/playground'

import { timelineDefaultValues } from '@/data/hero/timelineData'

import './index.scss'

export default function Hero() {
  return (
    <GSAPTimelineProvider {...timelineDefaultValues}>
      <div id='hero_container'>
        {/* <HeroCanvas /> */}
        {/* <PlaygroundCanvas /> */}
        {/* <AsciiWithWebgpuCanvas /> */}
        <ParametricLinearRgbDimmerCanvas />
        {/* <AnimationControls /> */}
      </div>
    </GSAPTimelineProvider>
  )
}
