import React from 'react'

import { GSAPTimelineProvider } from '@/contexts/GsapTimelineContext'

// import AnimationControls from '@/components/layout/buttons/animation_controls'
import { HeroCanvas } from '@/components/three/canvas'
import {} from // AsciiWithWebgpuCanvas,
// ParametricLinearRgbDimmerCanvas,
// PlaneFitScreenCanvas,
// PlaygroundCanvas,
// RainbowGradientThatIgnoresBlackCanvas,
'@/components/three/canvas/playground'

import { timelineDefaultValues } from '@/data/hero/timelineData'

import './index.scss'

export default function Hero() {
  return (
    <GSAPTimelineProvider {...timelineDefaultValues}>
      <div id='hero_container'>
        <HeroCanvas />
        {/* <PlaygroundCanvas /> */}
        {/* <AsciiWithWebgpuCanvas /> */}
        {/* <ParametricLinearRgbDimmerCanvas /> */}
        {/* <RainbowGradientThatIgnoresBlackCanvas /> */}
        {/* <PlaneFitScreenCanvas /> */}
        {/* <AnimationControls /> */}
      </div>
    </GSAPTimelineProvider>
  )
}
