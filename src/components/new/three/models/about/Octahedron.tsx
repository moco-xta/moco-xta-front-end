import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Octahedron: THREE.Mesh
  }
  materials: {}
}

export function Octahedron({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.OCTAHEDRON) as GLTFResult

  return (
    <mesh
      geometry={nodes.Octahedron.geometry}
      position={position}
      receiveShadow
      castShadow
    >
      <meshStandardMaterial
        attach='material'
        color={'#1E1A6C'}
        roughness={0.3}
      />
    </mesh>
  )
}

useGLTF.preload(gltfConstants.ABOUT.OCTAHEDRON)
