import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Sun } from '@/components/three/models/home/hero/portrait/gobelino/Sun'

import { default as sunComponentConstants } from '@/constants/animations/home/hero/canvas/groups/portrait/gobelino/sunComponentConstants.json'

import { sunComponentAnimations } from 'animations'

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
          sunComponentConstants.ANIMATION['0_PERCENT'].POSITION.X,
          sunComponentConstants.ANIMATION['0_PERCENT'].POSITION.Y,
          sunComponentConstants.ANIMATION['0_PERCENT'].POSITION.Z,
        )
      }
    />
  )
}
