import React, { useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import AlsoText from './texts/AlsoText'
import KnowText from './texts/KnowText'
import AsText from './texts/AsText'

import { default as federicoPortraitGroupAnimationsConstants } from '@/constants/animations/home/hero/federicoPortraitGroupAnimationsConstants.json'

interface AlsoKnowAsInterface {
  timeline: GSAPTimeline
  duration: number
  delay: number
}

export default function AlsoKnowAs({ timeline, duration, delay }: AlsoKnowAsInterface) {
  const alsoKnowAsGroupRef = useRef<THREE.Group>(null!)

  useLayoutEffect(() => {
    if (alsoKnowAsGroupRef.current) alsoKnowAsGroupRef.current.visible = false
  }, [alsoKnowAsGroupRef])

  /* useGSAP(
    () => {
      // POSITION
      timeline.to(
        alsoKnowAsGroupRef.current,
        {
          keyframes: {
            '0%': {
              onComplete: () => {
                alsoKnowAsGroupRef.current.visible = true
              },
            },
            '100%': {
              onComplete: () => {
                alsoKnowAsGroupRef.current.visible = false
              },
            },
          },
          duration: duration,
        },
        delay,
      )
    },
    { scope: alsoKnowAsGroupRef },
  ) */

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
