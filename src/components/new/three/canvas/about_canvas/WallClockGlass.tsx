import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { glassSimpleMaterial } from '../../materials/standardsMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    WallClockGlass: THREE.Mesh
  }
  materials: {}
}

export function WallClockGlass({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.WALL_CLOCK_GLASS) as GLTFResult

  return (
    <mesh
      geometry={nodes.WallClockGlass.geometry}
      material={glassSimpleMaterial}
      position={position}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.HOUR_HAND)
