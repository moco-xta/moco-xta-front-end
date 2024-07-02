import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { getPlatonicSolidMaterial } from '@/components/three/materials/about/laboratoire/final_render/laboratoireFinalRenderMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Octahedron: THREE.Mesh
  }
  materials: {}
}

export function Octahedron({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SHELF_COLLECTION.PLATONIC_SOLIDS.OCTAHEDRON,
  ) as GLTFResult

  return (
    <mesh
      name={'Octahedron'}
      geometry={nodes.Octahedron.geometry}
      material={getPlatonicSolidMaterial('#1E1A6C')}
      position={position}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(
  gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SHELF_COLLECTION.PLATONIC_SOLIDS.OCTAHEDRON,
)
