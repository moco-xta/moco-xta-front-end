import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { Moon } from '@/components/three/models/home/hero/gobelino/Moon'

import { default as federicoPortraitGroupAnimationsConstants } from '@/constants/animations/home/hero/federicoPortraitGroupAnimationsConstants.json'

interface MoonComponentInterface {
  timeline: GSAPTimeline
  duration: number
  delay: number
}

export default function MoonComponent({ timeline, duration, delay }: MoonComponentInterface) {
  const moonComponentMeshRef = useRef<THREE.Mesh>(null!)

  useGSAP(
    () => {
      // OPACITY
      timeline.to(
        moonComponentMeshRef.current.material,
        {
          keyframes: {
            '40%': {
              opacity:
                federicoPortraitGroupAnimationsConstants.SUBS.GOBELINO.SUBS.SUN_AND_MOON.SUBS.MOON
                  .ANIMATION.MATERIAL['40_PERCENT'].OPACITY,
            },
            '60%': {
              opacity:
                federicoPortraitGroupAnimationsConstants.SUBS.GOBELINO.SUBS.SUN_AND_MOON.SUBS.MOON
                  .ANIMATION.MATERIAL['60_PERCENT'].OPACITY,
            },
            easeEach:
              federicoPortraitGroupAnimationsConstants.SUBS.GOBELINO.SUBS.SUN_AND_MOON.SUBS.MOON
                .ANIMATION.MATERIAL.EACH_EASE,
          },
          duration: duration,
        },
        delay,
      )
    },
    { scope: moonComponentMeshRef },
  )

  return (
    <Moon
      ref={moonComponentMeshRef}
      position={new THREE.Vector3(0, -3, 1)}
    />
  )
}
