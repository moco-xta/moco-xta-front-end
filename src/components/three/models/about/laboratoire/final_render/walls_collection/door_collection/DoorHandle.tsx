import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import {
  brassMaterial,
  porcelainMaterial,
} from '@/components/three/materials/about/laboratoire/final_render/laboratoireFinalRenderMaterials'

import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    DoorHandle_1: THREE.Mesh
    DoorHandle_2: THREE.Mesh
  }
  materials: {}
}

export function DoorHandle({ position }: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.DOOR_COLLECTION.DOOR_HANDLE,
  ) as GLTFResult

  return (
    <group
      name='DoorHandle'
      position={position}
    >
      <mesh
        name='DoorHandle_1'
        geometry={nodes.DoorHandle_1.geometry}
        material={porcelainMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='DoorHandle_2'
        geometry={nodes.DoorHandle_2.geometry}
        material={brassMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(
  gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.DOOR_COLLECTION.DOOR_HANDLE,
)
