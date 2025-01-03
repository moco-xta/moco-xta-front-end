import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { couronnesMaterial } from '@/components/three/materials/about/laboratoire/final_render/laboratoireFinalRenderMaterials'
import { defaultMaterial } from '@/components/three/materials/defaultMaterials'

import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Couronnes_1: THREE.Mesh
    Couronnes_2: THREE.Mesh
  }
  materials: {}
}

export function Couronnes({ position }: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.COURONNES,
  ) as GLTFResult

  return (
    <group
      name='Couronnes'
      position={position}
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
  gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.COURONNES,
)
