import React from 'react'
import * as THREE from 'three'
import { Plane } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export default function Ground() {
  return (
    <>
      <RigidBody colliders='hull'>
        <Plane
          args={[150, 150, 20, 20]}
          rotation={[THREE.MathUtils.degToRad(90), 0, 0]}
        />
      </RigidBody>
    </>
  )
}
