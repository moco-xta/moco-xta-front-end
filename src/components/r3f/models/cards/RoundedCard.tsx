import React from 'react'
import * as THREE from 'three'
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
      receiveShadow
      castShadow
    >
      <meshStandardMaterial
        attach='material'
        color={'white'}
      />
    </mesh>
  )
}

useGLTF.preload(GltfConstants.ROUNDED_CARD)
