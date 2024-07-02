import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { getPlatonicSolidMaterial } from '@/components/three/materials/about/laboratoire/final_render/laboratoireFinalRenderMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Tetrahedron: THREE.Mesh
  }
  materials: {}
}

export function Tetrahedron({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SHELF_COLLECTION.PLATONIC_SOLIDS.TETRAHEDRON,
  ) as GLTFResult

  return (
    <mesh
      name={'Tetrahedron'}
      geometry={nodes.Tetrahedron.geometry}
      material={getPlatonicSolidMaterial('#CB5389')}
      position={position}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(
  gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SHELF_COLLECTION.PLATONIC_SOLIDS.TETRAHEDRON,
)
