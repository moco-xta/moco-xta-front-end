import React from 'react'
import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'

export default function PhysicsGround() {
  return (
    <RigidBody
      type='fixed'
      colliders='hull'
    >
      <mesh
        position={new THREE.Vector3(0, 0, 0)}
        rotation={new THREE.Euler(THREE.MathUtils.degToRad(-90), 0, 0)}
      >
        <planeGeometry
          attach='geometry'
          args={[200, 200]}
        />
        <meshBasicMaterial
          transparent
          opacity={0}
        />
      </mesh>
    </RigidBody>
  )
}
