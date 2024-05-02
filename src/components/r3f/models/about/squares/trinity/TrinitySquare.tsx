import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    TrinitySquare: THREE.Mesh
  }
  materials: {
    gold: THREE.MeshPhysicalMaterial
  }
}

export default function TrinitySquare(props: JSX.IntrinsicElements['mesh']) {
  const { nodes, materials } = useGLTF(
    gltfConstants.ABOUT.SQUARES.TRINITY.SQUARE,
  ) as GLTFResult

  return (
    <mesh
      geometry={nodes.TrinitySquare.geometry}
      material={materials.gold}
      receiveShadow
      castShadow
      {...props}
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.SQUARES.TRINITY.SQUARE)
