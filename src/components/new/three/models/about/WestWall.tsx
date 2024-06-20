import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { wallSimpleMaterial } from '../../materials/laboratoireMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    WestWall: THREE.Mesh
  }
  materials: {}
}

export function WestWall({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.WEST_WALL) as GLTFResult

  return (
    <mesh
      geometry={nodes.WestWall.geometry}
      material={wallSimpleMaterial}
      position={position}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.WEST_WALL)
