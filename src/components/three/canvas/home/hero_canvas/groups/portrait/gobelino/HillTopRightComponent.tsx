import React, { useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { HillTopRight } from '@/components/three/models/home/hero/portrait/gobelino/HillTopRight'

import { default as hillTopRightComponentConstants } from '@/constants/animations/home/hero/portrait/gobelino/hillTopRightComponentConstants.json'

import { hillTopRightComponentAnimations } from '@/animations/index'

export default function HillTopRightComponent() {
  const { timeline } = useGSAPTimelineContext()

  const hillTopRightComponentGroupRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      const meshes: THREE.Mesh[] = gsap.utils.toArray(
        hillTopRightComponentGroupRef.current.children,
      )
      meshes.forEach((mesh) => {
        // MATERIAL
        timeline.to(
          mesh.material,
          {
            keyframes: hillTopRightComponentAnimations.material.keyframes,
            duration: hillTopRightComponentAnimations.material.duration,
          },
          hillTopRightComponentAnimations.delay,
        )
      })
    },
    { scope: hillTopRightComponentGroupRef },
  )

  return (
    <HillTopRight
      ref={hillTopRightComponentGroupRef}
      position={
        new THREE.Vector3(
          hillTopRightComponentConstants.ANIMATION['0_PERCENT'].POSITION.X,
          hillTopRightComponentConstants.ANIMATION['0_PERCENT'].POSITION.Y,
          hillTopRightComponentConstants.ANIMATION['0_PERCENT'].POSITION.Z,
        )
      }
    />
  )
}
