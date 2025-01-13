import React from 'react'
import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
import { TPhysicsGround } from '@/types/components/three/types'

export default function PhysicsGround({ args }: TPhysicsGround) {
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
          args={args}
        />
        <meshBasicMaterial
          transparent
          opacity={0}
        />
      </mesh>
    </RigidBody>
  )
}
