import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Christus } from '@/components/three/models/home/hero/portrait/foreground/mess/Christus'

import { default as christusComponentAnimationsConstants } from '@/constants/animations/home/hero/portrait/foreground/mess/christusComponentAnimationsConstants.json'

import { christusComponentAnimations } from '@/animations/index'

export default function ChristusComponent() {
  const { timeline } = useGSAPTimelineContext()

  const christusComponentMeshRef = useRef<THREE.Mesh>(null!)

  useGSAP(() => {
    // MATERIAL
    timeline.to(
      christusComponentMeshRef.current.material,
      {
        keyframes: christusComponentAnimations.material.keyframes,
        duration: christusComponentAnimations.material.duration,
      },
      christusComponentAnimations.delay,
    )
  })

  return (
    <Christus
      ref={christusComponentMeshRef}
      position={
        new THREE.Vector3(
          christusComponentAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.X,
          christusComponentAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Y,
          christusComponentAnimationsConstants.ANIMATION['0_PERCENT'].POSITION.Z,
        )
      }
      rotation={
        new THREE.Euler(
          THREE.MathUtils.degToRad(
            christusComponentAnimationsConstants.ANIMATION['0_PERCENT'].ROTATION.X,
          ),
          THREE.MathUtils.degToRad(
            christusComponentAnimationsConstants.ANIMATION['0_PERCENT'].ROTATION.Y,
          ),
          THREE.MathUtils.degToRad(
            christusComponentAnimationsConstants.ANIMATION['0_PERCENT'].ROTATION.Z,
          ),
        )
      }
      scale={[
        christusComponentAnimationsConstants.ANIMATION['0_PERCENT'].SCALE.X,
        christusComponentAnimationsConstants.ANIMATION['0_PERCENT'].SCALE.Y,
        christusComponentAnimationsConstants.ANIMATION['0_PERCENT'].SCALE.Z,
      ]}
    />
  )
}
