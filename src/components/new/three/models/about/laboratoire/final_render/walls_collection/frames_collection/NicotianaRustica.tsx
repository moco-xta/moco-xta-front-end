import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { nicotianaRusticaFrameMaterial, nicotianaRusticaMaterial } from '@/components/new/three/materials/about/laboratoire/final_render/laboratoireFinalRenderMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    NicotianaRustica_1: THREE.Mesh
    NicotianaRustica_2: THREE.Mesh
  }
  materials: {}
}

export function NicotianaRustica({ position }: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION
      .FRAMES_COLLECTION.NICOTIANA_RUSTICA,
  ) as GLTFResult

  return (
    <group
      name='NicotianaRustica'
      position={position}
      dispose={null}
    >
      <mesh
        name='NicotianaRustica_1'
        geometry={nodes.NicotianaRustica_1.geometry}
        material={nicotianaRusticaFrameMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='NicotianaRustica_2'
        geometry={nodes.NicotianaRustica_2.geometry}
        material={nicotianaRusticaMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(
  gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION
    .FRAMES_COLLECTION.NICOTIANA_RUSTICA,
)
