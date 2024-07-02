import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import {
  celestialMapFrameMaterial,
  celestialMapMaterial,
} from '@/components/three/materials/about/laboratoire/final_render/laboratoireFinalRenderMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    CelestialMap_1: THREE.Mesh
    CelestialMap_2: THREE.Mesh
  }
  materials: {}
}

export function CelestialMap({ position }: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.CELESTIAL_MAP,
  ) as GLTFResult

  return (
    <group
      name='CelestialMap'
      position={position}
      dispose={null}
    >
      <mesh
        name='CelestialMap_1'
        geometry={nodes.CelestialMap_1.geometry}
        material={celestialMapFrameMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='CelestialMap_2'
        geometry={nodes.CelestialMap_2.geometry}
        material={celestialMapMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(
  gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.CELESTIAL_MAP,
)
