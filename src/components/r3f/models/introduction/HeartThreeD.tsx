import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    HeartThreeD_1: THREE.Mesh
    HeartThreeD_2: THREE.Mesh
  }
  materials: {
    background: THREE.MeshStandardMaterial
    image: THREE.MeshStandardMaterial
  }
}

export function HeartThreeD({
  onPointerMove,
  onPointerOut,
}: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    gltfConstants.HEART_THREE_D,
  ) as GLTFResult
  return (
    <group
      dispose={null}
      onPointerMove={onPointerMove}
      onPointerOut={onPointerOut}
      scale={2.3}
    >
      <mesh
        geometry={nodes.HeartThreeD_1.geometry}
        material={materials.background}
      />
      <mesh
        geometry={nodes.HeartThreeD_2.geometry}
        material={materials.image}
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.HEART_THREE_D)
