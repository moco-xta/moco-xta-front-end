import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import {
  deskChairLeatherMaterial,
  deskChairLegMaterial,
  deskChairWheelsMaterial,
} from '@/components/new/three/materials/about/laboratoire/final_render/laboratoireFinalRenderMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    DeskChair_1: THREE.Mesh
    DeskChair_2: THREE.Mesh
    DeskChair_3: THREE.Mesh
  }
  materials: {}
}

export function DeskChair({
  position,
  rotation,
}: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.DESK_COLLECTION.DESK_CHAIR,
  ) as GLTFResult

  return (
    <group
      name='DeskChair'
      position={position}
      rotation={rotation}
      dispose={null}
    >
      <mesh
        name='DeskChair_1'
        geometry={nodes.DeskChair_1.geometry}
        material={deskChairLegMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='DeskChair_2'
        geometry={nodes.DeskChair_2.geometry}
        material={deskChairLeatherMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='DeskChair_3'
        geometry={nodes.DeskChair_3.geometry}
        material={deskChairWheelsMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(
  gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.DESK_COLLECTION.DESK_CHAIR,
)
