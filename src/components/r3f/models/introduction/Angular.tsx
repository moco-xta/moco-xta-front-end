import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Angular_1: THREE.Mesh
    Angular_2: THREE.Mesh
  }
  materials: {
    background: THREE.MeshStandardMaterial
    image: THREE.MeshStandardMaterial
  }
}

export function Angular({ onPointerMove, onPointerOut }: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(gltfConstants.ANGULAR) as GLTFResult
  return (
    <group
      dispose={null}
      onPointerMove={onPointerMove}
      onPointerOut={onPointerOut}
      scale={2.3}
    >
      <mesh
        geometry={nodes.Angular_1.geometry}
        material={materials.background}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Angular_2.geometry}
        material={materials.image}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.ANGULAR)
