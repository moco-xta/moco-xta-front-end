import React, { useLayoutEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import AlsoText from './texts/AlsoText'
import KnowText from './texts/KnowText'
import AsText from './texts/AsText'

import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'

interface AlsoKnowAsInterface {
  timeline: GSAPTimeline
}

export default function AlsoKnowAs({ timeline }: AlsoKnowAsInterface) {
  const [duration] = useState<number>(
    heroAnimationsConstants.BLOCKS.ALSO_KNOW_AS_GROUP.SUBS.ASLO_KNOW_AS.DURATION /
      heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    heroAnimationsConstants.BLOCKS.ALSO_KNOW_AS_GROUP.SUBS.ASLO_KNOW_AS.KEYFRAME_START /
      heroAnimationsConstants.SPEED,
  )

  const alsoKnowAsGroupRef = useRef<THREE.Group>(null!)

  useLayoutEffect(() => {
    if (alsoKnowAsGroupRef.current) alsoKnowAsGroupRef.current.visible = false
  }, [alsoKnowAsGroupRef])

  useGSAP(
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
