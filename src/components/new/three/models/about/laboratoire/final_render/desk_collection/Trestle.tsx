import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { trestleMaterial } from '@/components/new/three/materials/about/laboratoire/final_render/laboratoireFinalRenderMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Trestle: THREE.Mesh
  }
  materials: {}
}

export function Trestle({ name, position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.DESK_COLLECTION.TRESTLE,
  ) as GLTFResult

  return (
    <mesh
      name={name}
      geometry={nodes.Trestle.geometry}
      material={trestleMaterial}
      position={position}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(
  gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.DESK_COLLECTION.TRESTLE,
)
