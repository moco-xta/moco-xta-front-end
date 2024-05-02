import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    ButterflyBackground: THREE.Mesh
  }
  materials: {
    butterfly_background: THREE.MeshPhysicalMaterial
  }
}

export default function ButterflyBackground(props: JSX.IntrinsicElements['mesh']) {
  const { nodes, materials } = useGLTF(
    gltfConstants.ABOUT.SQUARES.BUTTERFLY.BACKGROUND,
  ) as GLTFResult

  return (
    <mesh
      geometry={nodes.ButterflyBackground.geometry}
      material={materials.butterfly_background}
      receiveShadow
      castShadow
      {...props}
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.SQUARES.BUTTERFLY.BACKGROUND)
