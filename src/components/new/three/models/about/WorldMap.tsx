import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    WorldMap: THREE.Mesh
  }
  materials: {}
}

export function WorldMap({
  position,
  rotation,
}: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.WORLD_MAP) as GLTFResult

  const worldMapMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.WORLD_MAP.DIFFUSE,
  )
  worldMapMap.flipY = false

  const worldMapMaterial = new THREE.MeshStandardMaterial({
    color: '#999',
    map: worldMapMap,
  })

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

useGLTF.preload(gltfConstants.ABOUT.WORLD_MAP)
