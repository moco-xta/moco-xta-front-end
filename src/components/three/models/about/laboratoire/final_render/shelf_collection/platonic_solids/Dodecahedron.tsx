import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { getPlatonicSolidMaterial } from '@/components/three/materials/about/laboratoire/final_render/laboratoireFinalRenderMaterials'

import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Dodecahedron: THREE.Mesh
  }
  materials: {}
}

export function Dodecahedron({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SHELF_COLLECTION.PLATONIC_SOLIDS.DODECAHEDRON,
  ) as GLTFResult

  return (
    <mesh
      name={'Dodecahedron'}
      geometry={nodes.Dodecahedron.geometry}
      material={getPlatonicSolidMaterial('#6DCDE7')}
      position={position}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(
  gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SHELF_COLLECTION.PLATONIC_SOLIDS.DODECAHEDRON,
)
