import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    NorthWall: THREE.Mesh
  }
  materials: {}
}

export function NorthWall({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.NORTH_WALL) as GLTFResult

  const northWallMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.NORTH_WALL.DIFFUSE.FOUR_K,
  )
  northWallMap.flipY = false

  const northWallMaterial = new THREE.MeshStandardMaterial({
    map: northWallMap,
  })

  return (
    <mesh
      geometry={nodes.NorthWall.geometry}
      material={northWallMaterial}
      position={position}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.NORTH_WALL)
