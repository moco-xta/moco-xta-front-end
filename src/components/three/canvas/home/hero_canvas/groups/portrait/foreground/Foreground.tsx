import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { Box } from '@react-three/drei'
import { useGSAP } from '@gsap/react'

import Portrait from './Portrait'
import AlsoKnowAs from '../../also_know_as/AlsoKnowAs'

import { boxGroupMaterial } from '@/components/three/materials/helpersMaterials'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as foregroundAnimationsConstants } from '@/constants/animations/home/hero/portrait/foregroundAnimationsConstants.json'

interface ForegroundInterface {
  timeline: GSAPTimeline
}

export default function Foreground({ timeline }: ForegroundInterface) {
  const [duration] = useState<number>(
    foregroundAnimationsConstants.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    foregroundAnimationsConstants.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const foregroundBoxGroupRef = useRef<THREE.Mesh>(null!)

  useGSAP(
    () => {
      // POSITION
      timeline
        .to(
          foregroundBoxGroupRef.current.position,
          {
            keyframes: {
              '0%': {
                z: foregroundAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Z,
              },
              '25%': {
                z: foregroundAnimationsConstants.ANIMATION['25_PERCENT'].POSITION.Z,
              },
              easeEach: foregroundAnimationsConstants.ANIMATION.EACH_EASE.POSITION,
            },
            duration: duration,
          },
          delay,
        )
        // ROTATION
        .to(
          foregroundBoxGroupRef.current.rotation,
          {
            keyframes: {
              '50%': {
                z: THREE.MathUtils.degToRad(
                  foregroundAnimationsConstants.ANIMATION['50_PERCENT'].ROTATION.Z,
                ),
              },
              '75%': {
                z: THREE.MathUtils.degToRad(
                  foregroundAnimationsConstants.ANIMATION['75_PERCENT'].ROTATION.Z,
                ),
              },
              easeEach: foregroundAnimationsConstants.ANIMATION.EACH_EASE.ROTATION,
            },
            duration: duration,
          },
          delay,
        )
        .to(
          // VISIBILITY
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
        )
    },
    { scope: foregroundBoxGroupRef },
  )

  return (
    <Box
      ref={foregroundBoxGroupRef}
      args={[1, 10, 1]}
      position={[0, -5, 0]}
      material={boxGroupMaterial}
    >
      <Portrait timeline={timeline} />
      <AlsoKnowAs timeline={timeline} />
    </Box>
  )
}
