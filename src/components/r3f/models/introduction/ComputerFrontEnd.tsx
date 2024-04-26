import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    ComputerFrontEnd_1: THREE.Mesh
    ComputerFrontEnd_2: THREE.Mesh
  }
  materials: {
    background: THREE.MeshStandardMaterial
    image: THREE.MeshStandardMaterial
  }
}

export function ComputerFrontEnd({
  onPointerMove,
  onPointerOut,
}: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    gltfConstants.COMPUTER_FRONT_END,
  ) as GLTFResult
  return (
    <group
      dispose={null}
      onPointerMove={onPointerMove}
      onPointerOut={onPointerOut}
      scale={2.5}
    >
      <mesh
        geometry={nodes.ComputerFrontEnd_1.geometry}
        material={materials.background}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.ComputerFrontEnd_2.geometry}
        material={materials.image}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.COMPUTER_FRONT_END)
