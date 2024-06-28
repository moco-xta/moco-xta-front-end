import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Nextjs_1: THREE.Mesh
    Nextjs_2: THREE.Mesh
  }
  materials: {
    background: THREE.MeshStandardMaterial
    image: THREE.MeshStandardMaterial
  }
}

export function Nextjs({ onPointerMove, onPointerOut }: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(gltfConstants.NEXTJS) as GLTFResult
  return (
    <group
      dispose={null}
      onPointerMove={onPointerMove}
      onPointerOut={onPointerOut}
      scale={2.3}
    >
      <mesh
        geometry={nodes.Nextjs_1.geometry}
        material={materials.background}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Nextjs_2.geometry}
        material={materials.image}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.NEXTJS)
