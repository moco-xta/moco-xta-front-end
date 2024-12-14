import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Cloud } from '@/components/three/models/home/hero/portrait/gobelino/Cloud'

import { default as cloudComponentConstants } from '@/constants/animations/home/hero/portrait/gobelino/cloudComponentConstants.json'

import { cloudComponentAnimations } from '@/animations/index'

interface CloudComponentInterface {
  position: THREE.Vector3
}

export default function CloudComponent({ position }: CloudComponentInterface) {
  const { timeline } = useGSAPTimelineContext()

  const cloudComponentMeshRef = useRef<THREE.Mesh>(null!)

  useGSAP(
    () => {
      // MATERIAL
      timeline.to(
        cloudComponentMeshRef.current.material,
        {
          keyframes: cloudComponentAnimations.material.keyframes,
          duration: cloudComponentAnimations.material.duration,
        },
        cloudComponentAnimations.delay,
      )
    },
    { scope: cloudComponentMeshRef },
  )

  return (
    <Cloud
      ref={cloudComponentMeshRef}
      position={position}
    />
  )
}
