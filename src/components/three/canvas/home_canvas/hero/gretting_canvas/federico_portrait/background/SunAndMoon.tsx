import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { Box } from '@react-three/drei'
import { useGSAP } from '@gsap/react'

import SunComponent from './SunComponent'
import MoonComponent from './MoonComponent'

import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'
import { boxGroupMaterial } from '@/components/three/materials/helpersMaterials'

interface SunAndMoonInterface {
  timeline: GSAPTimeline
}

export default function SunAndMoon({ timeline }: SunAndMoonInterface) {
  const [duration] = useState<number>(
    heroAnimationsConstants.SCENES.FEDERICO_PORTRAIT.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    heroAnimationsConstants.SCENES.FEDERICO_PORTRAIT.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const sunAndMoonBoxGroupRef = useRef<THREE.Mesh>(null!)

  useGSAP(() => {
    timeline.to(
      sunAndMoonBoxGroupRef.current.rotation,
      {
        keyframes: {
          '0%': { z: THREE.MathUtils.degToRad(66) },
          '66%': { z: THREE.MathUtils.degToRad(-33) },
          '100%': { z: THREE.MathUtils.degToRad(-213) },
          easeEach: 'power2.out',
        },
        duration: duration,
      },
      delay,
    )
  })

  return (
    <Box
      ref={sunAndMoonBoxGroupRef}
      args={[1, 6, 1]}
      rotation={new THREE.Euler(0, 0, THREE.MathUtils.degToRad(66))}
      material={boxGroupMaterial}
    >
      <SunComponent timeline={timeline} />
      <MoonComponent timeline={timeline} />
    </Box>
  )
}
