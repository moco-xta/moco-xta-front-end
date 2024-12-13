import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Moon } from '@/components/three/models/home/hero/portrait/gobelino/Moon'

import { default as moonComponentAnimationsConstants } from '@/constants/animations/home/hero/portrait/gobelino/moonComponentAnimationsConstants.json'

import { moonComponentAnimations } from '@/animations/index'

export default function MoonComponent() {
  const { timeline } = useGSAPTimelineContext()

  const moonComponentMeshRef = useRef<THREE.Mesh>(null!)

  useGSAP(
    () => {
      // MATERIAL
      timeline.to(
        moonComponentMeshRef.current.material,
        {
          keyframes: moonComponentAnimations.material.keyframes,
          duration: moonComponentAnimations.material.duration,
        },
        moonComponentAnimations.delay,
      )
    },
    { scope: moonComponentMeshRef },
  )

  return (
    <Moon
      ref={moonComponentMeshRef}
      position={
        new THREE.Vector3(
          moonComponentAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.X,
          moonComponentAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Y,
          moonComponentAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Z,
        )
      }
    />
  )
}
