import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import SunComponent from './SunComponent'
import MoonComponent from './MoonComponent'

import { default as sunAndMoonAnimationsConstants } from '@/constants/animations/home/hero/portrait/gobelino/sunAndMoonAnimationsConstants.json'

import { gobelinoComponentAnimations } from '@/animations/index'

export default function SunAndMoon() {
  const { timeline } = useGSAPTimelineContext()

  const sunAndMoonGroupRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      // ROTATION
      timeline.to(
        sunAndMoonGroupRef.current.rotation,
        {
          keyframes: gobelinoComponentAnimations.rotation.keyframes,
          duration: gobelinoComponentAnimations.rotation.duration,
        },
        gobelinoComponentAnimations.delay,
      )
    },
    { scope: sunAndMoonGroupRef },
  )

  return (
    <group
      ref={sunAndMoonGroupRef}
      rotation={
        new THREE.Euler(
          THREE.MathUtils.degToRad(sunAndMoonAnimationsConstants.ANIMATION['0_PERCENT'].ROTATION.X),
          THREE.MathUtils.degToRad(sunAndMoonAnimationsConstants.ANIMATION['0_PERCENT'].ROTATION.Y),
          THREE.MathUtils.degToRad(sunAndMoonAnimationsConstants.ANIMATION['0_PERCENT'].ROTATION.Z),
        )
      }
    >
      <SunComponent />
      <MoonComponent />
    </group>
  )
}
