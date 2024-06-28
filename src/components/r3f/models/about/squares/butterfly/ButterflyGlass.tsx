import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { glassMaterial } from '@/components/r3f/materials/glassMaterial'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    ButterflyGlass: THREE.Mesh
  }
  materials: {}
}

export default function ButterflyGlass(props: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.SQUARES.BUTTERFLY.GLASS) as GLTFResult

  return (
    <mesh
      geometry={nodes.ButterflyGlass.geometry}
      material={glassMaterial}
      {...props}
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.SQUARES.BRAIN.GLASS)
