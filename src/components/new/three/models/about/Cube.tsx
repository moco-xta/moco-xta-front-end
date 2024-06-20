import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
  }
  materials: {}
}

export function Cube({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.CUBE) as GLTFResult

  return (
    <mesh
      geometry={nodes.Cube.geometry}
      position={position}
      receiveShadow
      castShadow
    >
      <meshStandardMaterial
        attach='material'
        color={'#180F3B'}
        roughness={0.3}
      />
    </mesh>
  )
}

useGLTF.preload(gltfConstants.ABOUT.CUBE)
