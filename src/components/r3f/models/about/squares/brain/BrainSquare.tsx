import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    BrainSquare: THREE.Mesh
  }
  materials: {
    brain_square: THREE.MeshPhysicalMaterial
  }
}

export default function BrainSquare(props: JSX.IntrinsicElements['mesh']) {
  const { nodes, materials } = useGLTF(gltfConstants.ABOUT.SQUARES.BRAIN.SQUARE) as GLTFResult

  return (
    <mesh
      geometry={nodes.BrainSquare.geometry}
      material={materials.brain_square}
      receiveShadow
      castShadow
      {...props}
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.SQUARES.BRAIN.SQUARE)
