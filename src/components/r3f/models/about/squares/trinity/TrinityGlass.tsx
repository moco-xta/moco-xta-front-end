import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { glassMaterial } from '@/components/r3f/materials/glassMaterial'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    TrinityGlass: THREE.Mesh
  }
  materials: {}
}

export default function TrinityGlass(props: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.SQUARES.TRINITY.GLASS,
  ) as GLTFResult

  return (
    <mesh
      geometry={nodes.TrinityGlass.geometry}
      material={glassMaterial}
      receiveShadow
      castShadow
      {...props}
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.SQUARES.TRINITY.GLASS)
