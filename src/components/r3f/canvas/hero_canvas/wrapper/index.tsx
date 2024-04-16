import React from 'react'
import * as THREE from 'three'
import { Plane } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

export default function Wrapper() {
  const width = 2.55
  const height = 1.1
  /* const height = 3.3 */
  const depth = 0.83
  const opacity = 0

  return (
    <group>
      <RigidBody type='fixed'>
        <Plane
          args={[width, depth]}
          position={[0, height / 2, 0]}
          rotation={[THREE.MathUtils.degToRad(90), 0, 0]}
        >
          <meshStandardMaterial
            transparent
            opacity={opacity}
          />
        </Plane>
      </RigidBody>
      <RigidBody type='fixed'>
        <Plane
          args={[width, height]}
          position={[0, -height / 2, 0]}
          rotation={[THREE.MathUtils.degToRad(90), 0, 0]}
        >
          <meshStandardMaterial
            transparent
            opacity={opacity}
          />
        </Plane>
      </RigidBody>
      <RigidBody type='fixed'>
        <Plane
          args={[width, height]}
          position={[0, 0, -depth / 2]}
        >
          <meshStandardMaterial
            transparent
            opacity={opacity}
          />
        </Plane>
      </RigidBody>
      <RigidBody type='fixed'>
        <Plane
          args={[width, height]}
          position={[0, 0, depth / 2]}
        >
          <meshStandardMaterial
            transparent
            opacity={opacity}
          />
        </Plane>
      </RigidBody>
      <RigidBody type='fixed'>
        <Plane
          args={[depth, height]}
          position={[-width / 2, 0, 0]}
          rotation={[0, THREE.MathUtils.degToRad(90), 0]}
        >
          <meshStandardMaterial
            transparent
            opacity={opacity}
          />
        </Plane>
      </RigidBody>
      <RigidBody type='fixed'>
        <Plane
          args={[depth, height]}
          position={[width / 2, 0, 0]}
          rotation={[0, THREE.MathUtils.degToRad(-90), 0]}
        >
          <meshStandardMaterial
            transparent
            opacity={opacity}
          />
        </Plane>
      </RigidBody>
    </group>
  )
}
