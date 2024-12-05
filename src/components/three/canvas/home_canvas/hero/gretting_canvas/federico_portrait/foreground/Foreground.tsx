import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { Box } from '@react-three/drei'
import { useGSAP } from '@gsap/react'

import AlsoKnowAs from '../../also_know_as_group/AlsoKnowAs'

import { boxGroupMaterial } from '@/components/three/materials/helpersMaterials'

import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'
import Portrait from './Portrait'

interface ForegroundInterface {
  timeline: GSAPTimeline
}

export default function Foreground({ timeline }: ForegroundInterface) {
  const [duration] = useState<number>(
    heroAnimationsConstants.SCENES.FEDERICO_PORTRAIT.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    heroAnimationsConstants.SCENES.FEDERICO_PORTRAIT.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const foregroundBoxGroupRef = useRef<THREE.Mesh>(null!)

  useGSAP(() => {
    // POSITION
    timeline.to(
      foregroundBoxGroupRef.current.position,
      {
        keyframes: {
          '0%': { y: -6, z: 6 },
          '33%': { y: -5, z: 0 },
          easeEach: 'power2.out',
        },
        duration: duration,
      },
      delay,
    )

    // ROTATION
    timeline.to(
      foregroundBoxGroupRef.current.rotation,
      {
        keyframes: {
          '66%': { z: THREE.MathUtils.degToRad(0) },
          '100%': { z: THREE.MathUtils.degToRad(-180) },
          easeEach: 'power2.out',
        },
        duration: duration,
      },
      delay,
    )
  })

  return (
    <Box
      ref={foregroundBoxGroupRef}
      args={[1, 10, 1]}
      position={[0, -5, 0]}
      material={boxGroupMaterial}
    >
      <AlsoKnowAs />
      <Portrait timeline={timeline} />
    </Box>
  )
}
