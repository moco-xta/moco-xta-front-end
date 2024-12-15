import React, { useLayoutEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import AText from './texts/AText'
import FrontText from './texts/FrontText'
import EndText from './texts/EndText'
import DeveloperText from './texts/DeveloperText'

// import { default as heroConstants } from '@/constants/animations/home/hero/canvas/groups/heroConstants.json'
import { default as aFrontEndDeveloperTextGroupAnimationsConstants } from '@/constants/animations/home/hero/canvas/groups/developer/aFrontEndDeveloperTextGroupAnimationsConstants.json'

interface AFrontEndDeveloperTextGroupInterface {
  timeline: GSAPTimeline
}

export default function AFrontEndDeveloperTextGroup({
  timeline,
}: AFrontEndDeveloperTextGroupInterface) {
  /* const [duration] = useState<number>(
    aFrontEndDeveloperTextGroupAnimationsConstants.DURATION / heroConstants.SPEED,
  )
  const [delay] = useState<number>(
    aFrontEndDeveloperTextGroupAnimationsConstants.KEYFRAME_START / heroConstants.SPEED,
  ) */

  const aFrontEndDeveloperTextGroupRef = useRef<THREE.Group>(null!)

  useLayoutEffect(() => {
    if (aFrontEndDeveloperTextGroupRef.current)
      aFrontEndDeveloperTextGroupRef.current.visible = false
  }, [aFrontEndDeveloperTextGroupRef])

  /* useGSAP(
    () => {
      // POSITION
      timeline.to(
        aFrontEndDeveloperTextGroupRef.current,
        {
          keyframes: {
            '0%': {
              onComplete: () => {
                aFrontEndDeveloperTextGroupRef.current.visible = true
              },
            },
            '100%': {
              onComplete: () => {
                aFrontEndDeveloperTextGroupRef.current.visible = false
              },
            },
          },
          duration: duration,
        },
        delay,
      )
    },
    { scope: aFrontEndDeveloperTextGroupRef },
  ) */

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
