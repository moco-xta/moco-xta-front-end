import React from 'react'
import * as THREE from 'three'
import { Plane } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { usePlane } from '@react-three/cannon'
import { MeshProps } from '@react-three/fiber'

export default function Ground() {
  const [ref] = usePlane<THREE.Mesh>(() => ({
    position: [0, 0, 0],
    rotation: [-Math.PI / 2, 0, 0],
  }))

  return (
    <mesh ref={ref}>
      <planeGeometry
        attach='geometry'
        args={[57.2, 32]}
      />
      <meshStandardMaterial
        attach='material'
        color={'black'}
      />
    </mesh>
  )

  /* return (
    <>
      <RigidBody colliders='hull'>
        <Plane
          args={[150, 150, 20, 20]}
          rotation={[THREE.MathUtils.degToRad(90), 0, 0]}
        />
      </RigidBody>
    </>
  ) */
}
