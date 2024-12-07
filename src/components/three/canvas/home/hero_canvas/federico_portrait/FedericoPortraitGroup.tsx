import React, { useState } from 'react'

import Foreground from './foreground/Foreground'
import GobelinoComponent from './background/GobelinoComponent'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as federicoPortraitGroupAnimationsConstants } from '@/constants/animations/home/hero/federicoPortraitGroupAnimationsConstants.json'

interface FedericoPortraitGroupInterface {
  timeline: GSAPTimeline
}

export default function FedericoPortraitGroup({ timeline }: FedericoPortraitGroupInterface) {
  const [duration] = useState<number>(
    federicoPortraitGroupAnimationsConstants.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    federicoPortraitGroupAnimationsConstants.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  return (
    <>
      <Foreground
        timeline={timeline}
        duration={duration}
        delay={delay}
      />
      <GobelinoComponent
        timeline={timeline}
        duration={duration}
        delay={delay}
      />
    </>
  )
}
