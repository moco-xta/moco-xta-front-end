import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Ganesh } from '@/components/three/models/home/hero/portrait/foreground/mess/Ganesh'

import { default as ganeshComponentAnimationsConstants } from '@/constants/animations/home/hero/portrait/foreground/mess/ganeshComponentAnimationsConstants.json'

import { ganeshComponentAnimations } from '@/animations/index'

export default function GaneshComponent() {
  const { timeline } = useGSAPTimelineContext()

  const ganeshComponentMeshRef = useRef<THREE.Mesh>(null!)

  useGSAP(() => {
    // MATERIAL
    timeline.to(
      ganeshComponentMeshRef.current.material,
      {
        keyframes: ganeshComponentAnimations.material.keyframes,
        duration: ganeshComponentAnimations.material.duration,
      },
      ganeshComponentAnimations.delay,
    )
  })

  return (
    <Ganesh
      ref={ganeshComponentMeshRef}
      position={
        new THREE.Vector3(
          ganeshComponentAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.X,
          ganeshComponentAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Y,
          ganeshComponentAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Z,
        )
      }
      scale={ganeshComponentAnimationsConstants.ANIMATION['0_PERCENT'].SCALE}
    />
  )
}
