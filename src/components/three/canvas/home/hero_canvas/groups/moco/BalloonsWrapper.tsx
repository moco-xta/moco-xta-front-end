import React from 'react'
import * as THREE from 'three'
import { Plane } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

import { default as mocoGroupConstants } from '@/constants/animations/home/hero/canvas/groups/moco/mocoGroupConstants.json'

export default function BalloonsWrapper() {
  return (
    <group>
      <RigidBody type='fixed'>
        <Plane
          args={[
            mocoGroupConstants.WRAPPER.DIMENSIONS.WIDTH,
            mocoGroupConstants.WRAPPER.DIMENSIONS.DEPTH,
          ]}
          position={[0, mocoGroupConstants.WRAPPER.DIMENSIONS.HEIGHT / 2, 0]}
          rotation={[THREE.MathUtils.degToRad(90), 0, 0]}
        >
          <meshStandardMaterial
            transparent
            opacity={mocoGroupConstants.WRAPPER.OPACITY}
          />
        </Plane>
      </RigidBody>
      <RigidBody type='fixed'>
        <Plane
          args={[
            mocoGroupConstants.WRAPPER.DIMENSIONS.WIDTH,
            mocoGroupConstants.WRAPPER.DIMENSIONS.DEPTH,
          ]}
          position={[0, -mocoGroupConstants.WRAPPER.DIMENSIONS.HEIGHT / 2, 0]}
          rotation={[THREE.MathUtils.degToRad(90), 0, 0]}
        >
          <meshStandardMaterial
            transparent
            opacity={mocoGroupConstants.WRAPPER.OPACITY}
          />
        </Plane>
      </RigidBody>
      <RigidBody type='fixed'>
        <Plane
          args={[
            mocoGroupConstants.WRAPPER.DIMENSIONS.WIDTH,
            mocoGroupConstants.WRAPPER.DIMENSIONS.HEIGHT,
          ]}
          position={[0, 0, -mocoGroupConstants.WRAPPER.DIMENSIONS.DEPTH / 2]}
        >
          <meshStandardMaterial
            transparent
            opacity={mocoGroupConstants.WRAPPER.OPACITY}
          />
        </Plane>
      </RigidBody>
      <RigidBody type='fixed'>
        <Plane
          args={[
            mocoGroupConstants.WRAPPER.DIMENSIONS.WIDTH,
            mocoGroupConstants.WRAPPER.DIMENSIONS.HEIGHT,
          ]}
          position={[0, 0, mocoGroupConstants.WRAPPER.DIMENSIONS.DEPTH / 2]}
        >
          <meshStandardMaterial
            transparent
            opacity={mocoGroupConstants.WRAPPER.OPACITY}
          />
        </Plane>
      </RigidBody>
      <RigidBody type='fixed'>
        <Plane
          args={[
            mocoGroupConstants.WRAPPER.DIMENSIONS.DEPTH,
            mocoGroupConstants.WRAPPER.DIMENSIONS.HEIGHT,
          ]}
          position={[-mocoGroupConstants.WRAPPER.DIMENSIONS.WIDTH / 2, 0, 0]}
          rotation={[0, THREE.MathUtils.degToRad(90), 0]}
        >
          <meshStandardMaterial
            transparent
            opacity={mocoGroupConstants.WRAPPER.OPACITY}
          />
        </Plane>
      </RigidBody>
      <RigidBody type='fixed'>
        <Plane
          args={[
            mocoGroupConstants.WRAPPER.DIMENSIONS.DEPTH,
            mocoGroupConstants.WRAPPER.DIMENSIONS.HEIGHT,
          ]}
          position={[mocoGroupConstants.WRAPPER.DIMENSIONS.WIDTH / 2, 0, 0]}
          rotation={[0, THREE.MathUtils.degToRad(-90), 0]}
        >
          <meshStandardMaterial
            transparent
            opacity={mocoGroupConstants.WRAPPER.OPACITY}
          />
        </Plane>
      </RigidBody>
    </group>
  )
}
