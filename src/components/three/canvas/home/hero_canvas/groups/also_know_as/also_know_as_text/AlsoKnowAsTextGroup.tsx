import React, { useLayoutEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import AlsoText from './texts/AlsoText'
import KnowText from './texts/KnowText'
import AsText from './texts/AsText'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as alsoKnowAsAnimationsConstants } from '@/constants/animations/home/hero/portrait/alsoKnowAsAnimationsConstants.json'

interface AlsoKnowAsTextGroupInterface {
  timeline: GSAPTimeline
}

export default function AlsoKnowAsTextGroup({ timeline }: AlsoKnowAsTextGroupInterface) {
  const [duration] = useState<number>(
    alsoKnowAsAnimationsConstants.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    alsoKnowAsAnimationsConstants.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const alsoKnowAsGroupRef = useRef<THREE.Group>(null!)

  useLayoutEffect(() => {
    if (alsoKnowAsGroupRef.current) alsoKnowAsGroupRef.current.visible = false
  }, [alsoKnowAsGroupRef])

  useGSAP(
    () => {
      timeline.to(
        // VISIBILITY
        alsoKnowAsGroupRef.current,
        {
          keyframes: {
            '0%': {
              onComplete: () => {
                alsoKnowAsGroupRef.current.visible = true
              },
            },
          },
          duration: duration,
        },
        delay,
      )
    },
    { scope: alsoKnowAsGroupRef },
  )

  return (
    <group
      ref={alsoKnowAsGroupRef}
      position={new THREE.Vector3(0, -5, 0)}
      rotation={new THREE.Euler(0, 0, THREE.MathUtils.degToRad(-180))}
    >
      <AlsoText />
      <KnowText />
      <AsText />
    </group>
  )
}
