import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import {
  couronnesMaterial,
  defaultMaterial,
} from '@/components/new/three/materials/about/laboratoire/final_render/laboratoireFinalRenderMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Couronnes_1: THREE.Mesh
    Couronnes_2: THREE.Mesh
  }
  materials: {}
}

export function Couronnes({ position }: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION
      .FRAMES_COLLECTION.COURONNES,
  ) as GLTFResult

  return (
    <group
      name='Couronnes'
      position={position}
      dispose={null}
    >
      <mesh
        name='Couronnes_1'
        geometry={nodes.Couronnes_1.geometry}
        material={defaultMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='Couronnes_2'
        geometry={nodes.Couronnes_2.geometry}
        material={couronnesMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(
  gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION
    .FRAMES_COLLECTION.COURONNES,
)
