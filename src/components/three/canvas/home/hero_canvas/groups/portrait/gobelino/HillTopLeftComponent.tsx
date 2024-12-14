import React, { useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { HillTopLeft } from '@/components/three/models/home/hero/portrait/gobelino/HillTopLeft'

import { default as hillTopLeftComponentConstants } from '@/constants/animations/home/hero/portrait/gobelino/hillTopLeftComponentConstants.json'

import { hillTopleftComponentAnimations } from '@/animations/index'

export default function HillTopLeftComponent() {
  const { timeline } = useGSAPTimelineContext()

  const hillTopLeftComponentGroupRef = useRef<THREE.Group>(null!)

  useGSAP(
    () => {
      const meshes: THREE.Mesh[] = gsap.utils.toArray(hillTopLeftComponentGroupRef.current.children)
      meshes.forEach((mesh) => {
        // MATERIAL
        timeline.to(
          mesh.material,
          {
            keyframes: hillTopleftComponentAnimations.material.keyframes,
            duration: hillTopleftComponentAnimations.material.duration,
          },
          hillTopleftComponentAnimations.delay,
        )
      })
    },
    { scope: hillTopLeftComponentGroupRef },
  )

  return (
    <HillTopLeft
      ref={hillTopLeftComponentGroupRef}
      position={
        new THREE.Vector3(
          hillTopLeftComponentConstants.ANIMATION['0_PERCENT'].POSITION.X,
          hillTopLeftComponentConstants.ANIMATION['0_PERCENT'].POSITION.Y,
          hillTopLeftComponentConstants.ANIMATION['0_PERCENT'].POSITION.Z,
        )
      }
    />
  )
}
