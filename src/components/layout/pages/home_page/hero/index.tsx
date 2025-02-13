import React from 'react'
import Image from 'next/image'

import { GSAPTimelineProvider } from '@/contexts/GsapTimelineContext'

import HeadText from './head_text'
import { HeroCanvas } from '@/components/three/canvas'
// import AnimationControls from '@/components/layout/buttons/animation_controls'
import {} from // AsciiWithWebgpuCanvas,
// ParametricLinearRgbDimmerCanvas,
// PlaneFitScreenCanvas,
// PlaygroundCanvas,
// RainbowGradientThatIgnoresBlackCanvas,
'@/components/three/canvas/playground'

import { timelineDefaultValues } from '@/data/hero/timelineData'

import { default as imgConstants } from '@/constants/assets/imgConstants.json'

import './index.scss'

export default function Hero() {
  return (
    <GSAPTimelineProvider {...timelineDefaultValues}>
      <div id='hero_container'>
        <HeadText />
        <HeroCanvas />
        <Image
          src={imgConstants.PNG.ARIES.SRC}
          width={imgConstants.PNG.ARIES.DIMENSIONS.WITDH}
          height={imgConstants.PNG.ARIES.DIMENSIONS.HEIGHT}
          alt='Aries'
        />
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
