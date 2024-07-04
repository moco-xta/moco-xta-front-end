import React from 'react'
import * as THREE from 'three'
import { Plane } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

import { default as heroConstants } from '@/constants/canvas/heroConstants.json'

export default function BalloonsWrapper() {
  return (
    <group>
      <RigidBody type='fixed'>
        <Plane
          args={[
            heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS.SMALL_SCREEN.WIDTH,
            heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS.SMALL_SCREEN.DEPTH,
          ]}
          position={[
            0,
            heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS.SMALL_SCREEN.HEIGHT / 2,
            0,
          ]}
          rotation={[THREE.MathUtils.degToRad(90), 0, 0]} // Remove hardcoded values
        >
          <meshStandardMaterial
            transparent
            opacity={heroConstants.HELIUM_BALLOONS.WRAPPER.OPACITY}
          />
        </Plane>
      </RigidBody>
      <RigidBody type='fixed'>
        <Plane
          args={[
            heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS.SMALL_SCREEN.WIDTH,
            heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS.SMALL_SCREEN.DEPTH,
          ]}
          position={[
            0,
            -heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS.SMALL_SCREEN.HEIGHT / 2,
            0,
          ]}
          rotation={[THREE.MathUtils.degToRad(90), 0, 0]} // Remove hardcoded values
        >
          <meshStandardMaterial
            transparent
            opacity={heroConstants.HELIUM_BALLOONS.WRAPPER.OPACITY}
          />
        </Plane>
      </RigidBody>
      <RigidBody type='fixed'>
        <Plane
          args={[
            heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS.SMALL_SCREEN.WIDTH,
            heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS.SMALL_SCREEN.HEIGHT,
          ]}
          position={[
            0,
            0,
            -heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS.SMALL_SCREEN.DEPTH / 2,
          ]}
        >
          <meshStandardMaterial
            transparent
            opacity={heroConstants.HELIUM_BALLOONS.WRAPPER.OPACITY}
          />
        </Plane>
      </RigidBody>
      <RigidBody type='fixed'>
        <Plane
          args={[
            heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS.SMALL_SCREEN.WIDTH,
            heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS.SMALL_SCREEN.HEIGHT,
          ]}
          position={[0, 0, heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS.SMALL_SCREEN.DEPTH / 2]}
        >
          <meshStandardMaterial
            transparent
            opacity={heroConstants.HELIUM_BALLOONS.WRAPPER.OPACITY}
          />
        </Plane>
      </RigidBody>
      <RigidBody type='fixed'>
        <Plane
          args={[
            heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS.SMALL_SCREEN.DEPTH,
            heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS.SMALL_SCREEN.HEIGHT,
          ]}
          position={[
            -heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS.SMALL_SCREEN.WIDTH / 2,
            0,
            0,
          ]}
          rotation={[0, THREE.MathUtils.degToRad(90), 0]} // Remove hardcoded values
        >
          <meshStandardMaterial
            transparent
            opacity={heroConstants.HELIUM_BALLOONS.WRAPPER.OPACITY}
          />
        </Plane>
      </RigidBody>
      <RigidBody type='fixed'>
        <Plane
          args={[
            heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS.SMALL_SCREEN.DEPTH,
            heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS.SMALL_SCREEN.HEIGHT,
          ]}
          position={[heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS.SMALL_SCREEN.WIDTH / 2, 0, 0]}
          rotation={[0, THREE.MathUtils.degToRad(-90), 0]} // Remove hardcoded values
        >
          <meshStandardMaterial
            transparent
            opacity={heroConstants.HELIUM_BALLOONS.WRAPPER.OPACITY}
          />
        </Plane>
      </RigidBody>
    </group>
  )
}
