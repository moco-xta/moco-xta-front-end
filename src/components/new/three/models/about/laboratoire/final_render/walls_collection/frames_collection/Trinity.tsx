import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import {
  trinityFrameMaterial,
  trinityMaterial,
} from '@/components/new/three/materials/about/laboratoire/final_render/laboratoireFinalRenderMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Trinity_1: THREE.Mesh
    Trinity_2: THREE.Mesh
  }
  materials: {}
}

export function Trinity({ position }: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.TRINITY,
  ) as GLTFResult

  return (
    <group
      name='Trinity'
      position={position}
      dispose={null}
    >
      <mesh
        name='Trinity_1'
        geometry={nodes.Trinity_1.geometry}
        material={trinityFrameMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='Trinity_2'
        geometry={nodes.Trinity_2.geometry}
        material={trinityMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(
  gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.TRINITY,
)
