import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { Moon } from '@/components/three/models/home/hero/gobelino/Moon'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as moonAnimationsConstants } from '@/constants/animations/home/hero/portrait/moonAnimationsConstants.json'

interface MoonComponentInterface {
  timeline: GSAPTimeline
}

export default function MoonComponent({ timeline }: MoonComponentInterface) {
  const [duration] = useState<number>(
    moonAnimationsConstants.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    moonAnimationsConstants.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const moonComponentMeshRef = useRef<THREE.Mesh>(null!)

  useGSAP(
    () => {
      // OPACITY
      timeline.to(
        moonComponentMeshRef.current.material,
        {
          keyframes: {
            '0%': {
              opacity: moonAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
            },
            '33%': {
              opacity: moonAnimationsConstants.ANIMATION['33_PERCENT'].MATERIAL.OPACITY,
            },
            easeEach: moonAnimationsConstants.ANIMATION.EACH_EASE.MATERIAL,
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
