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
    heroAnimationsConstants.SCENES.FEDERICO_PORTRAIT.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    heroAnimationsConstants.SCENES.FEDERICO_PORTRAIT.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const sunComponentMeshRef = useRef<THREE.Mesh>(null!)

  useGSAP(() => {
    // POSITION
    timeline.to(
      sunComponentMeshRef.current.position,
      {
        keyframes: {
          '0%': { y: 6 },
          '33%': { y: 3 },
          easeEach: 'power1.in',
        },
        duration: duration,
      },
      delay,
    )
    // OPACITY
    timeline.to(
      sunComponentMeshRef.current.material,
      {
        keyframes: {
          '0%': { opacity: 0 },
          '33%': { opacity: 1 },
          easeEach: 'power1.in',
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
