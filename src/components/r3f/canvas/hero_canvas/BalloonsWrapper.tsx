import React from 'react'
import * as THREE from 'three'
import { Plane } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

import useIsMobile from '@/hooks/useIsMobile'

import { default as heroConstants } from '@/constants/canvas/heroConstants.json'

export default function BalloonsWrapper() {
  const { dimensionsType } = useIsMobile()

  if (!dimensionsType) return null

  return (
    <group>
      <RigidBody type='fixed'>
        <Plane
          args={[
            heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS[dimensionsType]
              .WIDTH,
            heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS[dimensionsType]
              .DEPTH,
          ]}
          position={[
            0,
            heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS[dimensionsType]
              .HEIGHT / 2,
            0,
          ]}
          rotation={[THREE.MathUtils.degToRad(90), 0, 0]}
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
            heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS[dimensionsType]
              .WIDTH,
            heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS[dimensionsType]
              .DEPTH,
          ]}
          position={[
            0,
            -heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS[dimensionsType]
              .HEIGHT / 2,
            0,
          ]}
          rotation={[THREE.MathUtils.degToRad(90), 0, 0]}
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
            heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS[dimensionsType]
              .WIDTH,
            heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS[dimensionsType]
              .HEIGHT,
          ]}
          position={[
            0,
            0,
            -heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS[dimensionsType]
              .DEPTH / 2,
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
            heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS[dimensionsType]
              .WIDTH,
            heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS[dimensionsType]
              .HEIGHT,
          ]}
          position={[
            0,
            0,
            heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS[dimensionsType]
              .DEPTH / 2,
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
            heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS[dimensionsType]
              .DEPTH,
            heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS[dimensionsType]
              .HEIGHT,
          ]}
          position={[
            -heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS[dimensionsType]
              .WIDTH / 2,
            0,
            0,
          ]}
          rotation={[0, THREE.MathUtils.degToRad(90), 0]}
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
            heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS[dimensionsType]
              .DEPTH,
            heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS[dimensionsType]
              .HEIGHT,
          ]}
          position={[
            heroConstants.HELIUM_BALLOONS.WRAPPER.DIMENSIONS[dimensionsType]
              .WIDTH / 2,
            0,
            0,
          ]}
          rotation={[0, THREE.MathUtils.degToRad(-90), 0]}
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
