import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import HiText from './texts/HiText'
import ImText from './texts/ImText'
import FedericoText from './texts/FedericoText'

import { default as greetingGroupAnimationsConstants } from '@/constants/animations/home/hero/canvas/groups/greeting/greetingGroupAnimationsConstants.json'

import { greetingGroupAnimations } from 'animations'

export default function GreetingGroup() {
  const { timeline } = useGSAPTimelineContext()

  const grettingGroupRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      timeline
        // POSITION
        .to(
          grettingGroupRef.current.position,
          {
            keyframes: greetingGroupAnimations.position.keyframes,
            duration: greetingGroupAnimations.duration,
          },
          greetingGroupAnimations.delay,
        )
        // ROTATION
        .to(
          grettingGroupRef.current.rotation,
          {
            keyframes: greetingGroupAnimations.rotation.keyframes,
            duration: greetingGroupAnimations.duration,
          },
          greetingGroupAnimations.delay,
        )
      // VISIBILITY
      /* .to(
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
          ) */
    },
    { scope: grettingGroupRef },
  )
  return (
    <group
      ref={grettingGroupRef}
      position={
        new THREE.Vector3(
          greetingGroupAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.X,
          greetingGroupAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Y,
          greetingGroupAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Z,
        )
      }
      rotation={
        new THREE.Euler(
          THREE.MathUtils.degToRad(
            greetingGroupAnimationsConstants.ANIMATION['0_PERCENT'].ROTATION.X,
          ),
          THREE.MathUtils.degToRad(
            greetingGroupAnimationsConstants.ANIMATION['0_PERCENT'].ROTATION.Y,
          ),
          THREE.MathUtils.degToRad(
            greetingGroupAnimationsConstants.ANIMATION['0_PERCENT'].ROTATION.Z,
          ),
        )
      }
    >
      <HiText />
      <ImText />
      <FedericoText />
    </group>
  )
}
