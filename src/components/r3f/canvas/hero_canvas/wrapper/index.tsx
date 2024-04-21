import React from 'react'
import * as THREE from 'three'
import { Box, Plane } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

import { default as heroConstants } from '@/constants/canvas/heroConstants.json'

export default function Wrapper() {
  return (
    <group>
      <RigidBody type='fixed'>
        <Plane
          args={[
            heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS.WIDTH,
            heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS.DEPTH,
          ]}
          position={[
            0,
            heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS.HEIGHT / 2,
            0,
          ]}
          rotation={[THREE.MathUtils.degToRad(90), 0, 0]}
        >
          <meshStandardMaterial
            transparent
            opacity={heroConstants.MOCO_HELIUM.WRAPPER.OPACITY}
          />
        </Plane>
      </RigidBody>
      <RigidBody type='fixed'>
        <Plane
          args={[
            heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS.WIDTH,
            heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS.DEPTH,
          ]}
          position={[
            0,
            -heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS.HEIGHT / 2,
            0,
          ]}
          rotation={[THREE.MathUtils.degToRad(90), 0, 0]}
        >
          <meshStandardMaterial
            transparent
            opacity={heroConstants.MOCO_HELIUM.WRAPPER.OPACITY}
          />
        </Plane>
      </RigidBody>
      <RigidBody type='fixed'>
        <Plane
          args={[
            heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS.WIDTH,
            heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS.HEIGHT,
          ]}
          position={[
            0,
            0,
            -heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS.DEPTH / 2,
          ]}
        >
          <meshStandardMaterial
            transparent
            opacity={heroConstants.MOCO_HELIUM.WRAPPER.OPACITY}
          />
        </Plane>
      </RigidBody>
      <RigidBody type='fixed'>
        <Plane
          args={[
            heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS.WIDTH,
            heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS.HEIGHT,
          ]}
          position={[
            0,
            0,
            heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS.DEPTH / 2,
          ]}
        >
          <meshStandardMaterial
            transparent
            opacity={heroConstants.MOCO_HELIUM.WRAPPER.OPACITY}
          />
        </Plane>
      </RigidBody>
      <RigidBody type='fixed'>
        <Plane
          args={[
            heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS.DEPTH,
            heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS.HEIGHT,
          ]}
          position={[
            -heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS.WIDTH / 2,
            0,
            0,
          ]}
          rotation={[0, THREE.MathUtils.degToRad(90), 0]}
        >
          <meshStandardMaterial
            transparent
            opacity={heroConstants.MOCO_HELIUM.WRAPPER.OPACITY}
          />
        </Plane>
      </RigidBody>
      <RigidBody type='fixed'>
        <Plane
          args={[
            heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS.DEPTH,
            heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS.HEIGHT,
          ]}
          position={[
            heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS.WIDTH / 2,
            0,
            0,
          ]}
          rotation={[0, THREE.MathUtils.degToRad(-90), 0]}
        >
          <meshStandardMaterial
            transparent
            opacity={heroConstants.MOCO_HELIUM.WRAPPER.OPACITY}
          />
        </Plane>
      </RigidBody>
    </group>
  )
}
