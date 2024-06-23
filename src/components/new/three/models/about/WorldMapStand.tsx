import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    WorldMapStand_1: THREE.Mesh
    WorldMapStand_2: THREE.Mesh
  }
  materials: {}
}

export function WorldMapStand({
  position,
  rotation,
}: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.WORLD_MAP_STAND) as GLTFResult

  const worldMapStandMarbleMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.WORLD_MAP_STAND_MARBLE.DIFFUSE,
  )
  const worldMapStandMarbleRoughnessMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.WORLD_MAP_STAND_MARBLE.ROUGHNESS,
  )
  const worldMapStandMarbleNormalMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.WORLD_MAP_STAND_MARBLE.NORMAL,
  )
  worldMapStandMarbleMap.flipY = false
  worldMapStandMarbleRoughnessMap.flipY = false
  worldMapStandMarbleNormalMap.flipY = false

  const worldMapStandMarbleMaterial = new THREE.MeshStandardMaterial({
    /* color: '#555', */
    map: worldMapStandMarbleMap,
    metalnessMap: worldMapStandMarbleRoughnessMap,
    roughness: 0.2,
    normalMap: worldMapStandMarbleNormalMap,
  })

  const worldMapStandUsedMetalRoughnessMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.WORLD_MAP_STAND_USED_METAL.ROUGHNESS,
  )
  const worldMapStandUsedMetalNormalMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.WORLD_MAP_STAND_USED_METAL.NORMAL,
  )
  worldMapStandUsedMetalRoughnessMap.flipY = false
  worldMapStandUsedMetalNormalMap.flipY = false

  const worldMapStandUsedMetalMaterial = new THREE.MeshStandardMaterial({
    color: '#777',
    metalness: 1,
    roughnessMap: worldMapStandUsedMetalRoughnessMap,
    normalMap: worldMapStandUsedMetalNormalMap,
  })

  return (
    <group
      name='WorldMapStand'
      position={position}
      rotation={rotation}
      dispose={null}
    >
      <mesh
        name='WorldMapStand_1'
        geometry={nodes.WorldMapStand_1.geometry}
        material={worldMapStandMarbleMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='WorldMapStand_2'
        geometry={nodes.WorldMapStand_2.geometry}
        material={worldMapStandUsedMetalMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.ABOUT.WORLD_MAP_STAND)
