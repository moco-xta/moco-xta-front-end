import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { BallCollider, RapierRigidBody, RigidBody } from '@react-three/rapier'

import type { TPointer } from '@/types/components/three/types'

import useMouseMove from '@/hooks/useMouseMove'

export default function Pointer({ pointerRef }: TPointer) {
  const ref = useRef<RapierRigidBody>(null!)

  const { uvX, uvY } = useMouseMove()

  useFrame(({ viewport }) => {
    if (ref.current) {
      pointerRef.current.lerp(
        { x: (uvX * viewport.width) / 2, y: (uvY * viewport.height) / 2, z: 0 },
        0.2,
      )
      ref.current.setNextKinematicTranslation(pointerRef.current)
    }
  })
  return (
    <RigidBody
      type='kinematicPosition'
      colliders={'ball'}
      ref={ref}
    >
      <BallCollider args={[1]} />
    </RigidBody>
  )
}
