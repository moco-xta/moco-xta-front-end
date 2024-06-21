import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Ceiling: THREE.Mesh
  }
  materials: {}
}

export function Ceiling({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.CEILING) as GLTFResult

  const ceilingMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.CEILING.DIFFUSE.FOUR_K,
  )
  ceilingMap.flipY = false

  const ceilingMaterial = new THREE.MeshStandardMaterial({
    map: ceilingMap,
  })

  return (
    <mesh
      geometry={nodes.Ceiling.geometry}
      material={ceilingMaterial}
      position={position}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.CEILING)
