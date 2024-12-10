import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { Sun } from '@/components/three/models/home/hero/gobelino/Sun'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as sunAnimationsConstants } from '@/constants/animations/home/hero/portrait/sunAnimationsConstants.json'

interface SunComponentInterface {
  timeline: GSAPTimeline
}

export default function SunComponent({ timeline }: SunComponentInterface) {
  const [duration] = useState<number>(
    sunAnimationsConstants.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    sunAnimationsConstants.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const sunComponentMeshRef = useRef<THREE.Mesh>(null!)

  useGSAP(
    () => {
      // OPACITY
      timeline.to(
        sunComponentMeshRef.current.material,
        {
          keyframes: {
            '0%': {
              opacity: sunAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
            },
            '33%': {
              opacity: sunAnimationsConstants.ANIMATION['33_PERCENT'].MATERIAL.OPACITY,
            },
            '66%': {
              opacity: sunAnimationsConstants.ANIMATION['66_PERCENT'].MATERIAL.OPACITY,
            },
            '100%': {
              opacity: sunAnimationsConstants.ANIMATION['100_PERCENT'].MATERIAL.OPACITY,
            },
            easeEach: sunAnimationsConstants.ANIMATION.EACH_EASE.MATERIAL,
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
