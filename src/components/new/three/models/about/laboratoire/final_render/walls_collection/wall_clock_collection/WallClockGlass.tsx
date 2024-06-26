import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { glassMaterial } from '@/components/new/three/materials/about/laboratoire/final_render/laboratoireFinalRenderMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    WallClockGlass: THREE.Mesh
  }
  materials: {}
}

export function WallClockGlass({}: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION
      .WALL_CLOCK_COLLECTION.WALL_CLOCK_GLASS,
  ) as GLTFResult

  return (
    <mesh
      name='WallClockGlass'
      geometry={nodes.WallClockGlass.geometry}
      material={glassMaterial}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(
  gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION
    .WALL_CLOCK_COLLECTION.WALL_CLOCK_GLASS,
)
