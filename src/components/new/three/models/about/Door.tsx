import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Door: THREE.Mesh
  }
  materials: {}
}

export function Door({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.DOOR) as GLTFResult

  const doorMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.DOOR.DIFFUSE.FOUR_K,
  )
  doorMap.flipY = false

  const doorMaterial = new THREE.MeshStandardMaterial({
    map: doorMap,
  })

  return (
    <mesh
      geometry={nodes.Door.geometry}
      material={doorMaterial}
      position={position}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.DOOR)
