import React from 'react'
import * as THREE from 'three'
import { RigidBody } from '@react-three/rapier'
/* import { usePlane } from '@react-three/cannon' */

import { physicsGroundMaterial } from '../../materials/about/aboutMaterials'

import { default as aboutConstants } from '@/constants/new/canvas/about/aboutConstants.json'

export default function PhysicsGround() {
  /* const [ref] = usePlane<THREE.Mesh>(() => ({
    position: [0, 0, 0],
    rotation: [-Math.PI / 2, 0, 0],
  }))

  return (
    <mesh ref={ref}>
      <planeGeometry
        attach='geometry'
        args={[100, 100]}
      />
      <meshStandardMaterial
        attach='material'
        transparent={true}
        opacity={0}
      />
    </mesh>
  ) */

  return (
    <RigidBody
      type='fixed'
      colliders='hull'
    >
      <mesh
        material={physicsGroundMaterial}
        position={
          new THREE.Vector3(
            aboutConstants.PHYSICS_GROUND.POSITON.X,
            aboutConstants.PHYSICS_GROUND.POSITON.Y,
            aboutConstants.PHYSICS_GROUND.POSITON.Z,
          )
        }
        rotation={
          new THREE.Euler(
            THREE.MathUtils.degToRad(aboutConstants.PHYSICS_GROUND.ROTATION.X),
            THREE.MathUtils.degToRad(aboutConstants.PHYSICS_GROUND.ROTATION.Y),
            THREE.MathUtils.degToRad(aboutConstants.PHYSICS_GROUND.ROTATION.Z),
          )
        }
      >
        <planeGeometry
          attach='geometry'
          args={[
            aboutConstants.PHYSICS_GROUND.ARGS.WIDTH,
            aboutConstants.PHYSICS_GROUND.ARGS.DEPTH,
          ]}
        />
      </mesh>
    </RigidBody>
  )
}
