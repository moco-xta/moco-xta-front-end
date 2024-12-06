import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { Moon } from '@/components/three/models/home/hero/gobelino/Moon'

import { default as heroAnimationsConstants } from '@/constants/animations/home/heroAnimationsConstants.json'

interface MoonComponentInterface {
  timeline: GSAPTimeline
}

export default function MoonComponent({ timeline }: MoonComponentInterface) {
  const [duration] = useState<number>(
    heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.GOBELINO.SUBS.SUN_AND_MOON.SUBS.MOON
      .DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.GOBELINO.SUBS.SUN_AND_MOON.SUBS.MOON
      .KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const moonComponentMeshRef = useRef<THREE.Mesh>(null!)

  useGSAP(() => {
    // OPACITY
    timeline.to(
      moonComponentMeshRef.current.material,
      {
        keyframes: {
          '40%': {
            opacity:
              heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.GOBELINO.SUBS.SUN_AND_MOON.SUBS
                .MOON.ANIMATION.MATERIAL['40_PERCENT'].OPACITY,
          },
          '60%': {
            opacity:
              heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.GOBELINO.SUBS.SUN_AND_MOON.SUBS
                .MOON.ANIMATION.MATERIAL['60_PERCENT'].OPACITY,
          },
          easeEach:
            heroAnimationsConstants.BLOCKS.FEDERICO_PORTRAIT.SUBS.GOBELINO.SUBS.SUN_AND_MOON.SUBS
              .MOON.ANIMATION.MATERIAL.EACH_EASE,
        },
        duration: duration,
      },
      delay,
    )
  })

  return (
    <Moon
      ref={moonComponentMeshRef}
      position={new THREE.Vector3(0, -3, 1)}
    />
  )
}
