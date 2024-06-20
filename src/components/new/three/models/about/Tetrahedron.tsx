import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Tetrahedron: THREE.Mesh
  }
  materials: {}
}

export function Tetrahedron({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.TETRAHEDRON) as GLTFResult

  return (
    <mesh
      geometry={nodes.Tetrahedron.geometry}
      position={position}
      receiveShadow
      castShadow
    >
      <meshStandardMaterial
        attach='material'
        color={'#CB5389'}
        roughness={0.3}
      />
    </mesh>
  )
}

useGLTF.preload(gltfConstants.ABOUT.TETRAHEDRON)
