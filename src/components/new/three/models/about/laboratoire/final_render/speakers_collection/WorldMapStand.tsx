import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import {
  worldMapStandMarbleMaterial,
  worldMapStandUsedMetalMaterial,
} from '@/components/new/three/materials/about/laboratoire/final_render/laboratoireFinalRenderMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    WorldMapStand_1: THREE.Mesh
    WorldMapStand_2: THREE.Mesh
  }
  materials: {}
}

export function WorldMapStand({ position, rotation }: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SPEAKERS_COLLECTION.WORLD_MAP_STAND,
  ) as GLTFResult

  return (
    <group
      name='WorldMapStand'
      position={position}
      rotation={rotation}
      dispose={null}
    >
      <mesh
        name='WorldMapStand_1'
        geometry={nodes.WorldMapStand_1.geometry}
        material={worldMapStandMarbleMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='WorldMapStand_2'
        geometry={nodes.WorldMapStand_2.geometry}
        material={worldMapStandUsedMetalMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SPEAKERS_COLLECTION.WORLD_MAP_STAND)
