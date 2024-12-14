import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import MessGroup from './mess/Mess'
import AlsoKnowAsText from '../../also_know_as/also_know_as_text/AlsoKnowAsTextGroup'

import { default as foregroundAnimationsConstants } from '@/constants/animations/home/hero/portrait/foreground/foregroundConstants.json'

import { foregroundAnimations } from '@/animations/home/hero/portrait/foreground/foregroundAnimations'

export default function Foreground() {
  const { timeline } = useGSAPTimelineContext()

  // const foregroundBoxGroupRef = useRef<THREE.Mesh>(null!)
  const foregroundGroupRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      const animations = foregroundAnimations()
      timeline
        // POSITION
        .to(
          foregroundGroupRef.current.position,
          {
            keyframes: animations.position.keyframes,
            duration: animations.duration,
          },
          animations.delay,
        )
        // ROTATION
        .to(
          foregroundGroupRef.current.rotation,
          {
            keyframes: animations.rotation.keyframes,
            duration: animations.duration,
          },
          animations.delay,
        )
      // VISIBILITY
      /* .to(
            foregroundBoxGroupRef.current,
            {
              keyframes: {
                '100%': {
                  onComplete: () => {
                    foregroundBoxGroupRef.current.visible = false
                  },
                },
              },
              duration: duration,
            },
            delay,
          ) */
    },
    { scope: foregroundGroupRef },
  )

  return (
    <group
      ref={foregroundGroupRef}
      position={[
        foregroundAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.X,
        foregroundAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Y,
        foregroundAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Z,
      ]}
    >
      <MessGroup />
      <AlsoKnowAsText />
    </group>
  )
}
