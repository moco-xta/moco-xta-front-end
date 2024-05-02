import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Couronnes_1: THREE.Mesh
    Couronnes_2: THREE.Mesh
  }
  materials: {
    couronnes: THREE.MeshStandardMaterial
  }
}

export default function Couronnes(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    gltfConstants.ABOUT.SQUARES.COURONNES,
  ) as GLTFResult

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Couronnes_1.geometry}
        material={materials.couronnes}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Couronnes_2.geometry}
        material={materials.couronnes}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.ABOUT.SQUARES.COURONNES)
