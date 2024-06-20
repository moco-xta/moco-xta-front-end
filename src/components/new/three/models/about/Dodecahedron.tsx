import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Dodecahedron: THREE.Mesh
  }
  materials: {}
}

export function Dodecahedron({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.DODECAHEDRON) as GLTFResult

  return (
    <mesh
      geometry={nodes.Dodecahedron.geometry}
      position={position}
      receiveShadow
      castShadow
    >
      <meshStandardMaterial
        attach='material'
        color={'#6DCDE7'}
        roughness={0.3}
      />
    </mesh>
  )
}

useGLTF.preload(gltfConstants.ABOUT.DODECAHEDRON)
