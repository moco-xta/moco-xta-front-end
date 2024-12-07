import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { Sun } from '@/components/three/models/home/hero/gobelino/Sun'

import { default as federicoPortraitGroupAnimationsConstants } from '@/constants/animations/home/hero/federicoPortraitGroupAnimationsConstants.json'

interface SunComponentInterface {
  timeline: GSAPTimeline
  duration: number
  delay: number
}

export default function SunComponent({ timeline, duration, delay }: SunComponentInterface) {
  const sunComponentMeshRef = useRef<THREE.Mesh>(null!)

  useGSAP(
    () => {
      // OPACITY
      timeline.to(
        sunComponentMeshRef.current.material,
        {
          keyframes: {
            '0%': {
              opacity:
                federicoPortraitGroupAnimationsConstants.SUBS.GOBELINO.SUBS.SUN_AND_MOON.SUBS.SUN
                  .MATERIAL['0_PERCENT'].OPACITY,
            },
            '20%': {
              opacity:
                federicoPortraitGroupAnimationsConstants.SUBS.GOBELINO.SUBS.SUN_AND_MOON.SUBS.SUN
                  .MATERIAL['20_PERCENT'].OPACITY,
            },
            '40%': {
              opacity:
                federicoPortraitGroupAnimationsConstants.SUBS.GOBELINO.SUBS.SUN_AND_MOON.SUBS.SUN
                  .MATERIAL['40_PERCENT'].OPACITY,
            },
            '60%': {
              opacity:
                federicoPortraitGroupAnimationsConstants.SUBS.GOBELINO.SUBS.SUN_AND_MOON.SUBS.SUN
                  .MATERIAL['60_PERCENT'].OPACITY,
            },
            easeEach:
              federicoPortraitGroupAnimationsConstants.SUBS.GOBELINO.SUBS.SUN_AND_MOON.SUBS.SUN
                .MATERIAL.EACH_EASE,
          },
          duration: duration,
        },
        delay,
      )
    },
    { scope: sunComponentMeshRef },
  )

  return (
    <Sun
      ref={sunComponentMeshRef}
      position={new THREE.Vector3(0, 3, 1)}
    />
  )
}
