import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import {
  amorLlamaAmorFrameMaterial,
  amorLlamaAmorMaterial,
} from '@/components/new/three/materials/about/laboratoire/final_render/laboratoireFinalRenderMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    AmorLlamaAmor_1: THREE.Mesh
    AmorLlamaAmor_2: THREE.Mesh
  }
  materials: {}
}

export function AmorLlamaAmor({ position }: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION
      .FRAMES_COLLECTION.AMOR_LLAMA_AMOR,
  ) as GLTFResult

  return (
    <group
      name='AmorLlamaAmor'
      position={position}
      dispose={null}
    >
      <mesh
        name='AmorLlamaAmor_1'
        geometry={nodes.AmorLlamaAmor_1.geometry}
        material={amorLlamaAmorFrameMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='AmorLlamaAmor_2'
        geometry={nodes.AmorLlamaAmor_2.geometry}
        material={amorLlamaAmorMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(
  gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION
    .FRAMES_COLLECTION.AMOR_LLAMA_AMOR,
)
