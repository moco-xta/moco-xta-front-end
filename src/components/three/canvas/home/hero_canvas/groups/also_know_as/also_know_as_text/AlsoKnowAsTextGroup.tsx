import React, { useLayoutEffect, useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import AlsoText from './texts/AlsoText'
import KnowText from './texts/KnowText'
import AsText from './texts/AsText'

import { default as foregroundAnimationsConstants } from '@/constants/animations/home/hero/portrait/foreground/foregroundConstants.json'
import { default as alsoKnowAsConstants } from '@/constants/animations/home/hero/portrait/foreground/alsoKnowAsConstants.json'

export default function AlsoKnowAsTextGroup() {
  const { timeline } = useGSAPTimelineContext()

  const alsoKnowAsGroupRef = useRef<THREE.Group>(null!)

  /* useLayoutEffect(() => {
    if (alsoKnowAsGroupRef.current) alsoKnowAsGroupRef.current.visible = false
  }, [alsoKnowAsGroupRef]) */

  /* useGSAP(
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
  ) */

  return (
    <group
      ref={alsoKnowAsGroupRef}
      position={
        new THREE.Vector3(0, foregroundAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Y, 0)
      }
      rotation={new THREE.Euler(0, 0, THREE.MathUtils.degToRad(-180))}
    >
      <AlsoText />
      <KnowText />
      <AsText />
    </group>
  )
}
