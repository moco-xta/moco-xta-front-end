import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import {
  monarchBottomMaterial,
  monarchFrameMaterial,
  monarchMaterial,
} from '@/components/three/materials/about/laboratoire/final_render/laboratoireFinalRenderMaterials'

import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Monarch_1: THREE.Mesh
    Monarch_2: THREE.Mesh
    Monarch_3: THREE.Mesh
  }
  materials: {}
}

export function Monarch({ position }: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.MONARCH,
  ) as GLTFResult

  return (
    <group
      name='Monarch'
      position={position}
    >
      <mesh
        name='Monarch_1'
        geometry={nodes.Monarch_1.geometry}
        material={monarchFrameMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='Monarch_2'
        geometry={nodes.Monarch_2.geometry}
        material={monarchBottomMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='Monarch_3'
        geometry={nodes.Monarch_3.geometry}
        material={monarchMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(
  gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.MONARCH,
)
