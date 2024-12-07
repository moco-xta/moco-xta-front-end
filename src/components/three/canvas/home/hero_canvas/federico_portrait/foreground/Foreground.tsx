import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { Box } from '@react-three/drei'
import { useGSAP } from '@gsap/react'

import Portrait from './Portrait'
import AlsoKnowAs from '../../gretting_canvas/also_know_as_group/AlsoKnowAs'

import { boxGroupMaterial } from '@/components/three/materials/helpersMaterials'

import { default as federicoPortraitGroupAnimationsConstants } from '@/constants/animations/home/hero/federicoPortraitGroupAnimationsConstants.json'

interface ForegroundInterface {
  timeline: GSAPTimeline
  duration: number
  delay: number
}

export default function Foreground({ timeline, duration, delay }: ForegroundInterface) {
  const foregroundBoxGroupRef = useRef<THREE.Mesh>(null!)

  useGSAP(
    () => {
      // POSITION
      timeline.to(
        foregroundBoxGroupRef.current.position,
        {
          keyframes: {
            '0%': {
              z: federicoPortraitGroupAnimationsConstants.SUBS.FOREGROUND.ANIMATION.POSITION[
                '0_PERCENT'
              ].Z,
            },
            '20%': {
              z: federicoPortraitGroupAnimationsConstants.SUBS.FOREGROUND.ANIMATION.POSITION[
                '20_PERCENT'
              ].Z,
            },
            easeEach:
              federicoPortraitGroupAnimationsConstants.SUBS.FOREGROUND.ANIMATION.POSITION.EACH_EASE,
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
                federicoPortraitGroupAnimationsConstants.SUBS.FOREGROUND.ANIMATION.ROTATION[
                  '40_PERCENT'
                ].Z,
              ),
            },
            '60%': {
              z: THREE.MathUtils.degToRad(
                federicoPortraitGroupAnimationsConstants.SUBS.FOREGROUND.ANIMATION.ROTATION[
                  '60_PERCENT'
                ].Z,
              ),
            },
            easeEach:
              federicoPortraitGroupAnimationsConstants.SUBS.FOREGROUND.ANIMATION.ROTATION.EACH_EASE,
          },
          duration: duration,
        },
        delay,
      )
    },
    /* { scope: foregroundBoxGroupRef }, */
  )

  return (
    <Box
      ref={foregroundBoxGroupRef}
      args={[1, 10, 1]}
      position={[0, -5, 0]}
      material={boxGroupMaterial}
    >
      <Portrait
        timeline={timeline}
        duration={duration}
        delay={delay}
      />
      <AlsoKnowAs
        timeline={timeline}
        duration={duration}
        delay={delay}
      />
    </Box>
  )
}
