import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { Heart } from '@/components/three/models/home/hero/portrait/Heart'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as heartComponentAnimationsConstants } from '@/constants/animations/home/hero/portrait/heartComponentAnimationsConstants.json'

export default function HeartComponent() {
  const [duration] = useState<number>(
    heartComponentAnimationsConstants.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    heartComponentAnimationsConstants.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const heartComponentMeshRef = useRef<THREE.Mesh>(null!)

  useGSAP(() => {
    if (heartComponentAnimationsConstants.ANIMATE)
      // MATERIAL
      timeline.to(
        heartComponentMeshRef.current.material,
        {
          keyframes: {
            '0%': {
              opacity: heartComponentAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
            },
            '25%': {
              opacity: heartComponentAnimationsConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
            },
            easeEach: heartComponentAnimationsConstants.ANIMATION.EACH_EASE.MATERIAL,
          },
          duration: duration,
        },
        delay,
      )
  })

  return (
    <Heart
      ref={heartComponentMeshRef}
      position={new THREE.Vector3(1.5, -3.75, 1)}
      scale={0.5}
    />
  )
}
