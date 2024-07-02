import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
  }
  materials: {
    arrow_material: THREE.MeshStandardMaterial
  }
}

export function Arrow({ position, rotation }: JSX.IntrinsicElements['mesh']) {
  const { nodes, materials } = useGLTF(gltfConstants.RUBIKS_CUBE.ARROW) as GLTFResult
  return (
    <mesh
      geometry={nodes.Cube.geometry}
      position={position}
      rotation={rotation}
      material={materials.arrow_material}
    />
  )
}

useGLTF.preload(gltfConstants.RUBIKS_CUBE.ARROW)
