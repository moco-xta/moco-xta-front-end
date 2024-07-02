import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import {
  mondaineWallClockMaterial,
  wallClockBrushedMetalMaterial,
} from '@/components/three/materials/about/laboratoire/final_render/laboratoireFinalRenderMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    WallClock_1: THREE.Mesh
    WallClock_2: THREE.Mesh
  }
  materials: {}
}

export function WallClock({ position }: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.WALL_CLOCK_COLLECTION.WALL_CLOCK,
  ) as GLTFResult

  return (
    <group
      position={position}
      dispose={null}
    >
      <mesh
        name='WallClock_1'
        geometry={nodes.WallClock_1.geometry}
        material={wallClockBrushedMetalMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='WallClock_2'
        geometry={nodes.WallClock_2.geometry}
        material={mondaineWallClockMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(
  gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.WALL_CLOCK_COLLECTION.WALL_CLOCK,
)
