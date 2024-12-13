import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { Ganesh } from '@/components/three/models/home/hero/portrait/Ganesh'

import { default as heroAnimationsConstants } from '@/constants/animations/home/hero/heroAnimationsConstants.json'
import { default as ganeshComponentAnimationsConstants } from '@/constants/animations/home/hero/portrait/ganeshComponentAnimationsConstants.json'

export default function GaneshComponent() {
  const [duration] = useState<number>(
    ganeshComponentAnimationsConstants.DURATION / heroAnimationsConstants.SPEED,
  )
  const [delay] = useState<number>(
    ganeshComponentAnimationsConstants.KEYFRAME_START / heroAnimationsConstants.SPEED,
  )

  const ganeshComponentMeshRef = useRef<THREE.Mesh>(null!)

  useGSAP(() => {
    if (ganeshComponentAnimationsConstants.ANIMATE)
      // MATERIAL
      timeline.to(
        ganeshComponentMeshRef.current.material,
        {
          keyframes: {
            '0%': {
              opacity: ganeshComponentAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY,
            },
            '25%': {
              opacity: ganeshComponentAnimationsConstants.ANIMATION['25_PERCENT'].MATERIAL.OPACITY,
            },
            easeEach: ganeshComponentAnimationsConstants.ANIMATION.EACH_EASE.MATERIAL,
          },
          duration: duration,
        },
        delay,
      )
  })

  return (
    <Ganesh
      ref={ganeshComponentMeshRef}
      position={new THREE.Vector3(-2.5, -1.5, 0)}
      scale={0.5}
    />
  )
}
