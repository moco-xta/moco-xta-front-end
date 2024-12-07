import React, { useRef, useState } from 'react'
import * as THREE from 'three'

import AText from './texts/AText'
import FrontText from './texts/FrontText'
import EndText from './texts/EndText'
import DeveloperText from './texts/DeveloperText'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as aFrontEndDeveloperTextGroupAnimationsConstants } from '@/constants/animations/home/hero/developer/aFrontEndDeveloperTextGroupAnimationsConstants.json'

interface AFrontEndDeveloperTextGroupInterface {
  timeline: GSAPTimeline
}

export default function AFrontEndDeveloperTextGroup({
  timeline,
}: AFrontEndDeveloperTextGroupInterface) {
  const [duration] = useState<number>(
    aFrontEndDeveloperTextGroupAnimationsConstants.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    aFrontEndDeveloperTextGroupAnimationsConstants.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const aFrontEndDeveloperTextGroupRef = useRef<THREE.Group>(null!)

  return (
    <group
      ref={aFrontEndDeveloperTextGroupRef}
      position={new THREE.Vector3(0, 0, 0)}
    >
      <AText timeline={timeline} />
      <FrontText timeline={timeline} />
      <EndText timeline={timeline} />
      <DeveloperText timeline={timeline} />
    </group>
  )
}
