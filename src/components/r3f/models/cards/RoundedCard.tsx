import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    RoundedCard: THREE.Mesh
  }
  materials: {
    Material: THREE.MeshStandardMaterial
  }
}

export function RoundedCard({
  onPointerMove,
  onPointerOut,
}: JSX.IntrinsicElements['mesh']) {
  const { nodes, materials } = useGLTF(GltfConstants.ROUNDED_CARD) as GLTFResult
  return (
    <mesh
      geometry={nodes.RoundedCard.geometry}
      onPointerMove={onPointerMove}
      onPointerOut={onPointerOut}
      material={materials.Material}
    />
  )
}

useGLTF.preload(GltfConstants.ROUNDED_CARD)
