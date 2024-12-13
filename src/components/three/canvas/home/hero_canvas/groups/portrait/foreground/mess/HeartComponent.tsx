import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Heart } from '@/components/three/models/home/hero/portrait/foreground/mess/Heart'

import { default as heartComponentAnimationsConstants } from '@/constants/animations/home/hero/portrait/foreground/mess/heartComponentAnimationsConstants.json'

import { heartComponentAnimations } from '@/animations/index'

export default function HeartComponent() {
  const { timeline } = useGSAPTimelineContext()

  const heartComponentMeshRef = useRef<THREE.Mesh>(null!)

  useGSAP(() => {
    // MATERIAL
    timeline.to(
      heartComponentMeshRef.current.material,
      {
        keyframes: heartComponentAnimations.material.keyframes,
        duration: heartComponentAnimations.material.duration,
      },
      heartComponentAnimations.delay,
    )
  })

  return (
    <Heart
      ref={heartComponentMeshRef}
      position={
        new THREE.Vector3(
          heartComponentAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.X,
          heartComponentAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Y,
          heartComponentAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Z,
        )
      }
      scale={heartComponentAnimationsConstants.ANIMATION['0_PERCENT'].SCALE}
    />
  )
}
