import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    WallClock_1: THREE.Mesh
    WallClock_2: THREE.Mesh
  }
  materials: {}
}

export function WallClock({ position }: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.WALL_CLOCK) as GLTFResult

  const wallClockBrushedMetalMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.WALL_CLOCK_BRUSHED_METAL.DIFFUSE.FOUR_K,
  )
  const wallClockBrushedMetalRoughnessMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.WALL_CLOCK_BRUSHED_METAL.ROUGHNESS.FOUR_K,
  )
  const wallClockBrushedMetalNormalMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.WALL_CLOCK_BRUSHED_METAL.NORMAL.FOUR_K,
  )
  wallClockBrushedMetalMap.flipY = false
  wallClockBrushedMetalRoughnessMap.flipY = false
  wallClockBrushedMetalNormalMap.flipY = false

  const wallClockBrushedMetalMaterial = new THREE.MeshStandardMaterial({
    map: wallClockBrushedMetalMap,
    metalness: 0,
    roughnessMap: wallClockBrushedMetalRoughnessMap,
    normalMap: wallClockBrushedMetalNormalMap,
  })
  const mondaineWallClockMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.MONDAINE_WALL_CLOCK.DIFFUSE.FOUR_K,
  )
  mondaineWallClockMap.flipY = false
  const mondaineWallClockMaterial = new THREE.MeshStandardMaterial({
    map: mondaineWallClockMap,
  })

  return (
    <group
      position={position}
      dispose={null}
    >
      <mesh
        name='WallClock_1'
        geometry={nodes.WallClock_1.geometry}
        material={wallClockBrushedMetalMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='WallClock_2'
        geometry={nodes.WallClock_2.geometry}
        material={mondaineWallClockMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.ABOUT.WALL_CLOCK)
