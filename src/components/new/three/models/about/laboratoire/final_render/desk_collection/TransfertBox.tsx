import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import {
  ironMaterial,
  transfertBoxMaterial,
} from '@/components/new/three/materials/about/laboratoire/final_render/laboratoireFinalRenderMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    TransfertBox_1: THREE.Mesh
    TransfertBox_2: THREE.Mesh
  }
  materials: {}
}

export function TransfertBox({ name, position, rotation }: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.DESK_COLLECTION.TRANSFERT_BOX,
  ) as GLTFResult

  return (
    <group
      name={name}
      position={position}
      rotation={rotation}
      dispose={null}
    >
      <mesh
        name='TransfertBox_1'
        geometry={nodes.TransfertBox_1.geometry}
        material={transfertBoxMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='TransfertBox_2'
        geometry={nodes.TransfertBox_2.geometry}
        material={ironMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.DESK_COLLECTION.TRANSFERT_BOX)
