import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import {
  macBookProKeyboardMaterial,
  macBookProMaterial,
  macBookProScreenMaterial,
} from '@/components/new/three/materials/about/laboratoire/final_render/laboratoireFinalRenderMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    MacBookPro_1: THREE.Mesh
    MacBookPro_2: THREE.Mesh
    MacBookPro_3: THREE.Mesh
  }
  materials: {}
}

export function MacBookPro({ position }: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.MAC_BOOK_PRO,
  ) as GLTFResult

  return (
    <group
      name='MacBookPro'
      position={position}
      dispose={null}
    >
      <mesh
        name='MacBookPro_1'
        geometry={nodes.MacBookPro_1.geometry}
        material={macBookProMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='MacBookPro_2'
        geometry={nodes.MacBookPro_2.geometry}
        material={macBookProScreenMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='MacBookPro_3'
        geometry={nodes.MacBookPro_3.geometry}
        material={macBookProKeyboardMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.MAC_BOOK_PRO)
