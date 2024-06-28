import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { glassMaterial } from '@/components/r3f/materials/glassMaterial'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    BrainGlass: THREE.Mesh
  }
  materials: {}
}

export default function BrainGlass(props: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.SQUARES.BRAIN.GLASS) as GLTFResult

  return (
    <mesh
      geometry={nodes.BrainGlass.geometry}
      material={glassMaterial}
      {...props}
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.SQUARES.BRAIN.GLASS)
