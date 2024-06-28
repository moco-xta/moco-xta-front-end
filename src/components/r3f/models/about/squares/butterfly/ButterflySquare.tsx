import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    ButterflySquare: THREE.Mesh
  }
  materials: {
    butterfly_square: THREE.MeshPhysicalMaterial
  }
}

export default function ButterflySquare(props: JSX.IntrinsicElements['mesh']) {
  const { nodes, materials } = useGLTF(gltfConstants.ABOUT.SQUARES.BUTTERFLY.SQUARE) as GLTFResult

  return (
    <mesh
      geometry={nodes.ButterflySquare.geometry}
      material={materials.butterfly_square}
      receiveShadow
      castShadow
      {...props}
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.SQUARES.BUTTERFLY.SQUARE)
