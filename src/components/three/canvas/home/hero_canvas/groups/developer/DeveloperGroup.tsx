import React, { useLayoutEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'

import AFrontEndDeveloperTextGroup from './a_front_developer/AFrontEndDeveloperTextGroup'
import MacBookProGroup from './mac_book_pro/MacBookProGroup'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as developerGroupAnimationsConstants } from '@/constants/animations/home/hero/developer/developerGroupAnimationsConstants.json'

interface DeveloperGroupInterface {
  timeline: GSAPTimeline
}

export default function DeveloperGroup({ timeline }: DeveloperGroupInterface) {
  const [duration] = useState<number>(
    developerGroupAnimationsConstants.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    developerGroupAnimationsConstants.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const developerGroupRef = useRef<THREE.Group>(null!)

  useLayoutEffect(() => {
    if (developerGroupRef.current) developerGroupRef.current.visible = false
  }, [developerGroupRef])

  useGSAP(
    () => {
      // POSITION
      timeline.to(
        developerGroupRef.current,
        {
          keyframes: {
            '0%': {
              onComplete: () => {
                developerGroupRef.current.visible = true
              },
            },
            '100%': {
              onComplete: () => {
                developerGroupRef.current.visible = false
              },
            },
          },
          duration: duration,
        },
        delay,
      )
    },
    { scope: developerGroupRef },
  )

  return (
    <group ref={developerGroupRef}>
      <AFrontEndDeveloperTextGroup timeline={timeline} />
      <MacBookProGroup timeline={timeline} />
    </group>
  )
}
