import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { Box } from '@react-three/drei'
import { useGSAP } from '@gsap/react'

import Portrait from './Portrait'
import AlsoKnowAs from '../../also_know_as_group/AlsoKnowAs'

import { boxGroupMaterial } from '@/components/three/materials/helpersMaterials'

import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'

interface ForegroundInterface {
  timeline: GSAPTimeline
}

export default function Foreground({ timeline }: ForegroundInterface) {
  const [duration] = useState<number>(
    heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.FOREGROUND.DURATION /
      heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.FOREGROUND.KEYFRAME_START /
      heroAnimationsConstants.SPEED,
  )

  const foregroundBoxGroupRef = useRef<THREE.Mesh>(null!)

  useGSAP(
    () => {
      // POSITION
      timeline.to(
        foregroundBoxGroupRef.current.position,
        {
          keyframes: {
            '0%': {
              z: heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.FOREGROUND.ANIMATION
                .POSITION['0_PERCENT'].Z,
            },
            '20%': {
              z: heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.FOREGROUND.ANIMATION
                .POSITION['20_PERCENT'].Z,
            },
            easeEach:
              heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.FOREGROUND.ANIMATION.POSITION
                .EACH_EASE,
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
            '40%': {
              z: THREE.MathUtils.degToRad(
                heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.FOREGROUND.ANIMATION.ROTATION[
                  '40_PERCENT'
                ].Z,
              ),
            },
            '60%': {
              z: THREE.MathUtils.degToRad(
                heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.FOREGROUND.ANIMATION.ROTATION[
                  '60_PERCENT'
                ].Z,
              ),
            },
            easeEach:
              heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.FOREGROUND.ANIMATION.ROTATION
                .EACH_EASE,
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
