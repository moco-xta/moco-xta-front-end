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
    heroAnimationsConstants.SCENES.FEDERICO_PORTRAIT.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    heroAnimationsConstants.SCENES.FEDERICO_PORTRAIT.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const moonComponentMeshRef = useRef<THREE.Mesh>(null!)

  useGSAP(() => {
    // OPACITY
    timeline.to(
      moonComponentMeshRef.current.material,
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
    <Moon
      ref={moonComponentMeshRef}
      position={new THREE.Vector3(0, -3, 1)}
    />
  )
}
