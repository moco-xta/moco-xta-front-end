import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Icosahedron: THREE.Mesh
  }
  materials: {}
}

export function Icosahedron({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.ICOSAHEDRON) as GLTFResult

  return (
    <mesh
      geometry={nodes.Icosahedron.geometry}
      position={position}
      receiveShadow
      castShadow
    >
      <meshStandardMaterial
        attach='material'
        color={'#EF8AF0'}
        roughness={0.3}
      />
    </mesh>
  )
}

useGLTF.preload(gltfConstants.ABOUT.ICOSAHEDRON)
