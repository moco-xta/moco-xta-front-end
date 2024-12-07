import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import HiText from './texts/HiText'
import ImText from './texts/ImText'
import FedericoText from './texts/FedericoText'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as greetingGroupAnimationsConstants } from '@/constants/animations/home/hero/greeting/greetingGroupAnimationsConstants.json'

import { greetingGroupAnimations } from 'animations'

interface GreetingGroupInterface {
  timeline: GSAPTimeline
}

export default function GreetingGroup({ timeline }: GreetingGroupInterface) {
  const [duration] = useState<number>(
    greetingGroupAnimationsConstants.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    greetingGroupAnimationsConstants.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const grettingGroupRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      timeline
        // POSITION
        .to(
          grettingGroupRef.current.position,
          {
            keyframes: greetingGroupAnimations.position.keyframes,
            duration: duration,
          },
          delay,
        )
        // ROTATION
        .to(
          grettingGroupRef.current.rotation,
          {
            keyframes: greetingGroupAnimations.rotation.keyframes,
            duration: duration,
          },
          delay,
        )
        // VISIBILITY
        .to(
          grettingGroupRef.current,
          {
            keyframes: {
              '0%': {
                onComplete: () => {
                  grettingGroupRef.current.visible = true
                },
              },
              '100%': {
                onComplete: () => {
                  grettingGroupRef.current.visible = false
                },
              },
            },
            duration: duration,
          },
          delay,
        )
    },
    { scope: grettingGroupRef },
  )
  return (
    <group
      ref={grettingGroupRef}
      position={new THREE.Vector3(3, -0.5, 4)}
    >
      <HiText timeline={timeline} />
      <ImText timeline={timeline} />
      <FedericoText timeline={timeline} />
    </group>
  )
}
