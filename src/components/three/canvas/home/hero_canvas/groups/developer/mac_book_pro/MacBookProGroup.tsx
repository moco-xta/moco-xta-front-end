import React, { useLayoutEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'

import MacBookProComponent from './MacBookProComponent'
import LogosForegroundGroup from './LogosForegroundGroup'
import LogosBackgroundGroup from './LogosBackgroundGroup'

/* import { default as heroConstants } from '@/constants/animations/home/hero/canvas/groups/heroConstants.json' */
import { default as macBookProGroupAnimationsConstants } from '@/constants/animations/home/hero/canvas/groups/developer/macBookProGroupAnimationsConstants.json'

interface MacBookProGroupInterface {
  timeline: GSAPTimeline
}

export default function MacBookProGroup({ timeline }: MacBookProGroupInterface) {
  /* const [duration] = useState<number>(
    macBookProGroupAnimationsConstants.DURATION / heroConstants.SPEED,
  )
  const [delay] = useState<number>(
    macBookProGroupAnimationsConstants.KEYFRAME_START / heroConstants.SPEED,
  ) */

  const macBookProComponentAndLogosForegroundGroupRef = useRef<THREE.Group>(null!)

  const macBookProGroupRef = useRef<THREE.Group>(null!)

  useLayoutEffect(() => {
    if (macBookProGroupRef.current) macBookProGroupRef.current.visible = false
  }, [macBookProGroupRef])

  /* useGSAP(
    () => {
      // POSITION
      timeline.to(
        macBookProGroupRef.current,
        {
          keyframes: {
            '0%': {
              onComplete: () => {
                macBookProGroupRef.current.visible = true
              },
            },
            '100%': {
              onComplete: () => {
                macBookProGroupRef.current.visible = false
              },
            },
          },
          duration: duration,
        },
        delay,
      )
    },
    { scope: macBookProGroupRef },
  ) */

  return (
    <group ref={macBookProGroupRef}>
      <group ref={macBookProComponentAndLogosForegroundGroupRef}>
        <MacBookProComponent />
        <LogosForegroundGroup />
      </group>
      <LogosBackgroundGroup />
    </group>
  )
}
