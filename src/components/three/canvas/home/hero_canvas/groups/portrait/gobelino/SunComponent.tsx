import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Sun } from '@/components/three/models/home/hero/portrait/gobelino/Sun'

import { default as sunComponentAnimationsConstants } from '@/constants/animations/home/hero/portrait/gobelino/sunComponentAnimationsConstants.json'

import { sunComponentAnimations } from '@/animations/index'

export default function SunComponent() {
  const { timeline } = useGSAPTimelineContext()

  const sunComponentMeshRef = useRef<THREE.Mesh>(null!)

  useGSAP(
    () => {
      // MATERIAL
      timeline.to(
        sunComponentMeshRef.current.material,
        {
          keyframes: sunComponentAnimations.material.keyframes,
          duration: sunComponentAnimations.material.duration,
        },
        sunComponentAnimations.delay,
      )
    },
    { scope: sunComponentMeshRef },
  )

  return (
    <Sun
      ref={sunComponentMeshRef}
      position={
        new THREE.Vector3(
          sunComponentAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.X,
          sunComponentAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Y,
          sunComponentAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Z,
        )
      }
    />
  )
}
