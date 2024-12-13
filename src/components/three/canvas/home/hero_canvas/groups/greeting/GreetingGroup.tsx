import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import HiText from './texts/HiText'
import ImText from './texts/ImText'
import FedericoText from './texts/FedericoText'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as greetingAnimationsConstants } from '@/constants/animations/home/hero/greeting/greetingAnimationsConstants.json'
import { default as greetingGroupAnimationsConstants } from '@/constants/animations/home/hero/greeting/greetingGroupAnimationsConstants.json'

import { greetingGroupAnimations } from 'animations'

export default function GreetingGroup() {
  const { timeline } = useGSAPTimelineContext()

  const [duration] = useState<number>(
    greetingGroupAnimationsConstants.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    greetingGroupAnimationsConstants.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const grettingGroupRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      if (!greetingAnimationsConstants.PAUSED && !greetingGroupAnimationsConstants.PAUSED) {
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
      }
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
      <HiText timeline={timeline} />
      <ImText timeline={timeline} />
      <FedericoText timeline={timeline} />
    </group>
  )
}
