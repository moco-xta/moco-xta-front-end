import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { pabloEscobarMaterial } from '@/components/three/materials/about/laboratoire/final_render/laboratoireFinalRenderMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    PabloEscobar: THREE.Mesh
  }
  materials: {}
}

export function PabloEscobar({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SHELF_COLLECTION.PABLO_ESCOBAR,
  ) as GLTFResult

  return (
    <mesh
      name='PabloEscobar'
      geometry={nodes.PabloEscobar.geometry}
      material={pabloEscobarMaterial}
      position={position}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SHELF_COLLECTION.PABLO_ESCOBAR)
