import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'
import { default as rubiksCubeConstants } from '@/constants/canvas/rubiksCubeConstants.json'

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
        color={rubiksCubeConstants.RUBIKS_CUBE.ROUNDED_CUBES.MATERIAL.COLOR}
        roughness={rubiksCubeConstants.RUBIKS_CUBE.ROUNDED_CUBES.MATERIAL.ROUGHNESS}
      />
    </mesh>
  )
}

useGLTF.preload(gltfConstants.RUBIKS_CUBE.ROUNDED_CUBE)
