import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    WestWall: THREE.Mesh
  }
  materials: {}
}

export function WestWall({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.WEST_WALL) as GLTFResult

  const westWallMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.WEST_WALL.DIFFUSE.FOUR_K,
  )
  westWallMap.flipY = false

  const westhWallMaterial = new THREE.MeshStandardMaterial({
    map: westWallMap,
  })

  return (
    <mesh
      geometry={nodes.WestWall.geometry}
      material={westhWallMaterial}
      position={position}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.WEST_WALL)
