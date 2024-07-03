import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { worldMapMaterial } from '@/components/three/materials/about/laboratoire/final_render/laboratoireFinalRenderMaterials'

import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    WorldMap: THREE.Mesh
  }
  materials: {}
}

export function WorldMap({ position, rotation }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SPEAKERS_COLLECTION.WORLD_MAP,
  ) as GLTFResult

  return (
    <mesh
      geometry={nodes.WorldMap.geometry}
      material={worldMapMaterial}
      position={position}
      rotation={rotation}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SPEAKERS_COLLECTION.WORLD_MAP)
