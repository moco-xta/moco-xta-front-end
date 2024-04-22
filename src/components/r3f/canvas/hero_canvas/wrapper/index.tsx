import React from 'react'
import * as THREE from 'three'
import { Plane } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

import useIsMobile from '@/hooks/useIsMobile'

import { default as heroConstants } from '@/constants/canvas/heroConstants.json'

export default function Wrapper() {
  const { dimensionsType } = useIsMobile()

  if(!dimensionsType) return null

  return (
    <group>
      <RigidBody type='fixed'>
        <Plane
          args={[
            heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS[dimensionsType].WIDTH,
            heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS[dimensionsType].DEPTH,
          ]}
          position={[
            0,
            heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS[dimensionsType].HEIGHT / 2,
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
            heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS[dimensionsType].WIDTH,
            heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS[dimensionsType].DEPTH,
          ]}
          position={[
            0,
            -heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS[dimensionsType].HEIGHT / 2,
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
            heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS[dimensionsType].WIDTH,
            heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS[dimensionsType].HEIGHT,
          ]}
          position={[
            0,
            0,
            -heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS[dimensionsType].DEPTH / 2,
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
            heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS[dimensionsType].WIDTH,
            heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS[dimensionsType].HEIGHT,
          ]}
          position={[
            0,
            0,
            heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS[dimensionsType].DEPTH / 2,
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
            heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS[dimensionsType].DEPTH,
            heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS[dimensionsType].HEIGHT,
          ]}
          position={[
            -heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS[dimensionsType].WIDTH / 2,
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
            heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS[dimensionsType].DEPTH,
            heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS[dimensionsType].HEIGHT,
          ]}
          position={[
            heroConstants.MOCO_HELIUM.WRAPPER.DIMENSIONS[dimensionsType].WIDTH / 2,
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
