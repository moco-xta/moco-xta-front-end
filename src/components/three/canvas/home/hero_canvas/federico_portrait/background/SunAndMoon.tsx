import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { Box } from '@react-three/drei'
import { useGSAP } from '@gsap/react'

import SunComponent from './SunComponent'
import MoonComponent from './MoonComponent'

import { boxGroupMaterial } from '@/components/three/materials/helpersMaterials'

import { default as federicoPortraitGroupAnimationsConstants } from '@/constants/animations/home/hero/federicoPortraitGroupAnimationsConstants.json'

interface SunAndMoonInterface {
  timeline: GSAPTimeline
  duration: number
  delay: number
}

export default function SunAndMoon({ timeline, duration, delay }: SunAndMoonInterface) {
  const sunAndMoonBoxGroupRef = useRef<THREE.Mesh>(null!)

  useGSAP(
    () => {
      timeline.to(
        sunAndMoonBoxGroupRef.current.rotation,
        {
          keyframes: {
            '25%': {
              z: THREE.MathUtils.degToRad(
                federicoPortraitGroupAnimationsConstants.SUBS.GOBELINO.SUBS.SUN_AND_MOON.ANIMATION
                  .ROTATION['0_PERCENT'].Z,
              ),
            },
            '50%': {
              z: THREE.MathUtils.degToRad(
                federicoPortraitGroupAnimationsConstants.SUBS.GOBELINO.SUBS.SUN_AND_MOON.ANIMATION
                  .ROTATION['20_PERCENT'].Z,
              ),
            },
            '75%': {
              z: THREE.MathUtils.degToRad(
                federicoPortraitGroupAnimationsConstants.SUBS.GOBELINO.SUBS.SUN_AND_MOON.ANIMATION
                  .ROTATION['40_PERCENT'].Z,
              ),
            },
            '100%': {
              z: THREE.MathUtils.degToRad(
                federicoPortraitGroupAnimationsConstants.SUBS.GOBELINO.SUBS.SUN_AND_MOON.ANIMATION
                  .ROTATION['60_PERCENT'].Z,
              ),
            },
            easeEach:
              federicoPortraitGroupAnimationsConstants.SUBS.GOBELINO.SUBS.SUN_AND_MOON.ANIMATION
                .ROTATION.EACH_EASE,
          },
          duration: duration,
        },
        delay,
      )
    },
    { scope: sunAndMoonBoxGroupRef },
  )

  return (
    <Box
      ref={sunAndMoonBoxGroupRef}
      args={[1, 6, 1]}
      rotation={
        new THREE.Euler(
          0,
          0,
          THREE.MathUtils.degToRad(
            federicoPortraitGroupAnimationsConstants.SUBS.GOBELINO.SUBS.SUN_AND_MOON.ANIMATION
              .ROTATION['0_PERCENT'].Z,
          ),
        )
      }
      material={boxGroupMaterial}
    >
      <SunComponent
        timeline={timeline}
        duration={duration}
        delay={delay}
      />
      <MoonComponent
        timeline={timeline}
        duration={duration}
        delay={delay}
      />
    </Box>
  )
}
