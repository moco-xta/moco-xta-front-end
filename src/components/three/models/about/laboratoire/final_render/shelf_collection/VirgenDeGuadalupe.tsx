import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { virgenDeGuadalupematerial } from '@/components/three/materials/about/laboratoire/final_render/laboratoireFinalRenderMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    VirgenDeGuadalupe: THREE.Mesh
  }
  materials: {}
}

export function VirgenDeGuadalupe({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SHELF_COLLECTION.VIRGEN_DE_GUADALUPE,
  ) as GLTFResult

  return (
    <mesh
      name='VirgenDeGuadalupe'
      geometry={nodes.VirgenDeGuadalupe.geometry}
      material={virgenDeGuadalupematerial}
      position={position}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SHELF_COLLECTION.VIRGEN_DE_GUADALUPE)
