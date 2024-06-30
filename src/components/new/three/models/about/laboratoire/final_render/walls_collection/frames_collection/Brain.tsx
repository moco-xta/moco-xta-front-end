import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import {
  brainFrameMaterial,
  brainMaterial,
} from '@/components/new/three/materials/about/laboratoire/final_render/laboratoireFinalRenderMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Brain_1: THREE.Mesh
    Brain_2: THREE.Mesh
  }
  materials: {}
}

export function Brain({ position }: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.BRAIN,
  ) as GLTFResult

  return (
    <group
      name='Brain'
      position={position}
      dispose={null}
    >
      <mesh
        name='Brain_1'
        geometry={nodes.Brain_1.geometry}
        material={brainFrameMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='Brain_2'
        geometry={nodes.Brain_2.geometry}
        material={brainMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(
  gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.BRAIN,
)
