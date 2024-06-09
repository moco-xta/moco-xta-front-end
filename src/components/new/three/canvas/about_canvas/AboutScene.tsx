import React from 'react'
import * as THREE from 'three'
import { Box, Plane } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export default function AboutScene() {
  return (
    <>
      <Box />
      <RigidBody colliders='hull'>
        <Plane
          args={[50, 50, 20, 20]}
          rotation={[THREE.MathUtils.degToRad(90), 0, 0]}
        />
      </RigidBody>
    </>
  )
}
