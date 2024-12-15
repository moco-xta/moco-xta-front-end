import React, { useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Bird } from '@/components/three/models/home/hero/portrait/gobelino/Bird'

import { default as birdComponentConstants } from '@/constants/animations/home/hero/canvas/groups/portrait/gobelino/birdComponentConstants.json'

import { birdComponentAnimations } from 'animations'

export default function BirdComponent() {
  const { timeline } = useGSAPTimelineContext()

  const birdComponentGroupRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      const meshes: THREE.Mesh[] = gsap.utils.toArray(birdComponentGroupRef.current.children)
      meshes.forEach((mesh) => {
        // MATERIAL
        timeline.to(
          mesh.material,
          {
            keyframes: birdComponentAnimations.material.keyframes,
            duration: birdComponentAnimations.material.duration,
          },
          birdComponentAnimations.delay,
        )
      })
    },
    { scope: birdComponentGroupRef },
  )

  return (
    <Bird
      ref={birdComponentGroupRef}
      position={
        new THREE.Vector3(
          birdComponentConstants.ANIMATION['0_PERCENT'].POSITION.X,
          birdComponentConstants.ANIMATION['0_PERCENT'].POSITION.Y,
          birdComponentConstants.ANIMATION['0_PERCENT'].POSITION.Z,
        )
      }
    />
  )
}
