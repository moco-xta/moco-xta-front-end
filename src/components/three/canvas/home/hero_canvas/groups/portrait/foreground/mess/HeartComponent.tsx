import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Heart } from '@/components/three/models/home/hero/portrait/foreground/mess/Heart'

import { default as heartComponentConstants } from '@/constants/animations/home/hero/canvas/groups/portrait/foreground/mess/heartComponentConstants.json'

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
          heartComponentConstants.ANIMATION['0_PERCENT'].POSITION.X,
          heartComponentConstants.ANIMATION['0_PERCENT'].POSITION.Y,
          heartComponentConstants.ANIMATION['0_PERCENT'].POSITION.Z,
        )
      }
      scale={heartComponentConstants.ANIMATION['0_PERCENT'].SCALE}
    />
  )
}
