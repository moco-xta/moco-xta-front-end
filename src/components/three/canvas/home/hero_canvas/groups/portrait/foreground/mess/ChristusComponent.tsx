import React, { useRef } from 'react'
import * as THREE from 'three'
import { useGSAP } from '@gsap/react'

import { useGSAPTimelineContext } from '@/hooks/animations/useGSAPTimelineContext'

import { Christus } from '@/components/three/models/home/hero/portrait/foreground/mess/Christus'

import { default as christusComponentConstants } from '@/constants/animations/home/hero/canvas/groups/portrait/foreground/mess/christusComponentConstants.json'

import { christusComponentAnimations } from 'animations'

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
          christusComponentConstants.ANIMATION['0_PERCENT'].POSITION.X,
          christusComponentConstants.ANIMATION['0_PERCENT'].POSITION.Y,
          christusComponentConstants.ANIMATION['0_PERCENT'].POSITION.Z,
        )
      }
      rotation={
        new THREE.Euler(
          THREE.MathUtils.degToRad(christusComponentConstants.ANIMATION['0_PERCENT'].ROTATION.X),
          THREE.MathUtils.degToRad(christusComponentConstants.ANIMATION['0_PERCENT'].ROTATION.Y),
          THREE.MathUtils.degToRad(christusComponentConstants.ANIMATION['0_PERCENT'].ROTATION.Z),
        )
      }
      scale={[
        christusComponentConstants.ANIMATION['0_PERCENT'].SCALE.X,
        christusComponentConstants.ANIMATION['0_PERCENT'].SCALE.Y,
        christusComponentConstants.ANIMATION['0_PERCENT'].SCALE.Z,
      ]}
    />
  )
}
