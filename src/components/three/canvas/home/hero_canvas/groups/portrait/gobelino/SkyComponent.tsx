import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Sky } from '@/components/three/models/home/hero/portrait/gobelino/Sky'

import { default as skyComponentAnimationsConstants } from '@/constants/animations/home/hero/portrait/gobelino/skyComponentAnimationsConstants.json'

import { skyComponentAnimations } from '@/animations/index'

export default function SkyComponent() {
  const { timeline } = useGSAPTimelineContext()

  const skyComponentMeshRef = useRef<THREE.Mesh>(null!)

  useGSAP(
    () => {
      // POSITION
      timeline
        .to(
          skyComponentMeshRef.current.position,
          {
            keyframes: skyComponentAnimations.position.keyframes,
            duration: skyComponentAnimations.duration,
          },
          skyComponentAnimations.delay,
        )
        // COLOR
        .to(
          // @ts-ignore
          skyComponentMeshRef.current.material.color,
          {
            keyframes: skyComponentAnimations.color.keyframes,
            duration: skyComponentAnimations.duration,
          },
          skyComponentAnimations.delay,
        )
        // MATERIAL
        .to(
          skyComponentMeshRef.current.material,
          {
            keyframes: skyComponentAnimations.material.keyframes,
            duration: skyComponentAnimations.duration,
          },
          skyComponentAnimations.delay,
        )
    },
    { scope: skyComponentMeshRef },
  )

  return (
    <Sky
      ref={skyComponentMeshRef}
      position={[
        skyComponentAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.X,
        skyComponentAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Y,
        skyComponentAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Z,
      ]}
    />
  )
}
