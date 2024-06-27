import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Brain: THREE.Mesh
  }
  materials: {
    brain: THREE.MeshStandardMaterial
  }
}

export default function Brain(props: JSX.IntrinsicElements['mesh']) {
  const { nodes, materials } = useGLTF(gltfConstants.ABOUT.SQUARES.BRAIN.PICTURE) as GLTFResult

  return (
    <mesh
      geometry={nodes.Brain.geometry}
      material={materials.brain}
      receiveShadow
      castShadow
      {...props}
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.SQUARES.BRAIN.PICTURE)
