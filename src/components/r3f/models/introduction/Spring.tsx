import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Spring_1: THREE.Mesh
    Spring_2: THREE.Mesh
  }
  materials: {
    background: THREE.MeshStandardMaterial
    image: THREE.MeshStandardMaterial
  }
}

export function Spring({ onPointerMove, onPointerOut }: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(gltfConstants.SPRING) as GLTFResult
  return (
    <group
      dispose={null}
      onPointerMove={onPointerMove}
      onPointerOut={onPointerOut}
      scale={2.3}
    >
      <mesh
        geometry={nodes.Spring_1.geometry}
        material={materials.background}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Spring_2.geometry}
        material={materials.image}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.SPRING)
