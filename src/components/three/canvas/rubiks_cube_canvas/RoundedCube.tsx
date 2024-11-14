import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    RoundedCube: THREE.Mesh
  }
  materials: {}
}

export function RoundedCube() {
  const { nodes } = useGLTF(gltfConstants.RUBIKS_CUBE.ROUNDED_CUBE) as GLTFResult

  return (
    <mesh
      geometry={nodes.RoundedCube.geometry}
      receiveShadow
      castShadow
    >
      <meshStandardMaterial
        attach='material'
        color={'black'}
        roughness={0.8}
        transparent
      />
    </mesh>
  )
}

useGLTF.preload(gltfConstants.RUBIKS_CUBE.ROUNDED_CUBE)
