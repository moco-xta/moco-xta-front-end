import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { Sun } from '@/components/three/models/home/hero/gobelino/Sun'

import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'

interface SunComponentInterface {
  timeline: GSAPTimeline
}

export default function SunComponent({ timeline }: SunComponentInterface) {
  const [duration] = useState<number>(
    heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.GOBELINO.SUBS.SUN_AND_MOON.SUBS.SUN
      .DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.GOBELINO.SUBS.SUN_AND_MOON.SUBS.SUN
      .KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const sunComponentMeshRef = useRef<THREE.Mesh>(null!)

  useGSAP(() => {
    // OPACITY
    timeline.to(
      sunComponentMeshRef.current.material,
      {
        keyframes: {
          '0%': {
            opacity:
              heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.GOBELINO.SUBS.SUN_AND_MOON.SUBS
                .SUN.MATERIAL['0_PERCENT'].OPACITY,
          },
          '20%': {
            opacity:
              heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.GOBELINO.SUBS.SUN_AND_MOON.SUBS
                .SUN.MATERIAL['20_PERCENT'].OPACITY,
          },
          '40%': {
            opacity:
              heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.GOBELINO.SUBS.SUN_AND_MOON.SUBS
                .SUN.MATERIAL['40_PERCENT'].OPACITY,
          },
          '60%': {
            opacity:
              heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.GOBELINO.SUBS.SUN_AND_MOON.SUBS
                .SUN.MATERIAL['60_PERCENT'].OPACITY,
          },
          easeEach:
            heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.GOBELINO.SUBS.SUN_AND_MOON.SUBS
              .SUN.MATERIAL.EACH_EASE,
        },
        duration: duration,
      },
      delay,
    )
  })

  return (
    <Sun
      ref={sunComponentMeshRef}
      position={new THREE.Vector3(0, 3, 1)}
    />
  )
}
