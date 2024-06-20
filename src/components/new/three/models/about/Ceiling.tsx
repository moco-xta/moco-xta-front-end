import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { wallSimpleMaterial } from '../../materials/laboratoireMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Ceiling: THREE.Mesh
  }
  materials: {}
}

export function Ceiling({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.CEILING) as GLTFResult

  return (
    <mesh
      geometry={nodes.Ceiling.geometry}
      material={wallSimpleMaterial}
      position={position}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.CEILING)
