import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { wallSimpleMaterial } from '../../materials/laboratoireMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    NorthBaseboard: THREE.Mesh
  }
  materials: {}
}

export function NorthBaseboard({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.NORTH_BASEBOARD) as GLTFResult

  return (
    <mesh
      geometry={nodes.NorthBaseboard.geometry}
      material={wallSimpleMaterial}
      position={position}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.NORTH_BASEBOARD)
