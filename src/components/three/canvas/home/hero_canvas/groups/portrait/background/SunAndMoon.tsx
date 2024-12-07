import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { Box } from '@react-three/drei'
import { useGSAP } from '@gsap/react'

import SunComponent from './SunComponent'
import MoonComponent from './MoonComponent'

import { boxGroupMaterial } from '@/components/three/materials/helpersMaterials'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as sunAndMoonAnimationsConstants } from '@/constants/animations/home/hero/portrait/sunAndMoonAnimationsConstants.json'

interface SunAndMoonInterface {
  timeline: GSAPTimeline
}

export default function SunAndMoon({ timeline }: SunAndMoonInterface) {
  const [duration] = useState<number>(
    sunAndMoonAnimationsConstants.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    sunAndMoonAnimationsConstants.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const sunAndMoonBoxGroupRef = useRef<THREE.Mesh>(null!)

  useGSAP(
    () => {
      timeline.to(
        sunAndMoonBoxGroupRef.current.rotation,
        {
          keyframes: {
            '0%': {
              z: THREE.MathUtils.degToRad(
                sunAndMoonAnimationsConstants.ANIMATION['0_PERCENT'].ROTATION.Z,
              ),
            },
            '20%': {
              z: THREE.MathUtils.degToRad(
                sunAndMoonAnimationsConstants.ANIMATION['20_PERCENT'].ROTATION.Z,
              ),
            },
            '40%': {
              z: THREE.MathUtils.degToRad(
                sunAndMoonAnimationsConstants.ANIMATION['40_PERCENT'].ROTATION.Z,
              ),
            },
            '60%': {
              z: THREE.MathUtils.degToRad(
                sunAndMoonAnimationsConstants.ANIMATION['60_PERCENT'].ROTATION.Z,
              ),
            },
            easeEach: sunAndMoonAnimationsConstants.ANIMATION.EACH_EASE.ROTATION,
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
          THREE.MathUtils.degToRad(sunAndMoonAnimationsConstants.ANIMATION['0_PERCENT'].ROTATION.Z),
        )
      }
      material={boxGroupMaterial}
    >
      <SunComponent timeline={timeline} />
      <MoonComponent timeline={timeline} />
    </Box>
  )
}
