import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { wallMaterial } from '@/components/three/materials/about/laboratoire/final_render/laboratoireFinalRenderMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    NorthWall: THREE.Mesh
  }
  materials: {}
}

export function NorthWall({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.NORTH_WALL,
  ) as GLTFResult

  return (
    <mesh
      name='NorthWall'
      geometry={nodes.NorthWall.geometry}
      material={wallMaterial}
      position={position}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.NORTH_WALL)
