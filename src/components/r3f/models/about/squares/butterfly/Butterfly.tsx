import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Butterfly: THREE.Mesh
  }
  materials: {
    butterfly: THREE.MeshStandardMaterial
  }
}

export default function Butterfly(props: JSX.IntrinsicElements['mesh']) {
  const { nodes, materials } = useGLTF(gltfConstants.ABOUT.SQUARES.BUTTERFLY.PICTURE) as GLTFResult

  materials.butterfly.transparent = true

  return (
    <mesh
      geometry={nodes.Butterfly.geometry}
      material={materials.butterfly}
      receiveShadow
      castShadow
      {...props}
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.SQUARES.BUTTERFLY.PICTURE)
