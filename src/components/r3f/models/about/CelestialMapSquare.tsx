import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/gltfConstants.json'
import { default as texturesConstants } from '@/constants/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    CelestialMapSquare: THREE.Mesh
  }
  materials: {}
}

export function CelestialMapSquare({
  position,
  rotation,
}: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(gltfConstants.CELESTIAL_MAP_SQUARE) as GLTFResult
  return (
    <mesh
      geometry={nodes.CelestialMapSquare.geometry}
      position={position}
      rotation={rotation}
      receiveShadow
      castShadow
    >
      <meshStandardMaterial
        attach='material'
        color={'white'}
      />
    </mesh>
  )
}

useGLTF.preload(gltfConstants.CELESTIAL_MAP_SQUARE)
