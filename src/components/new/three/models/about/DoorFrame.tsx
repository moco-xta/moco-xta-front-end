import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    DoorFrame: THREE.Mesh
  }
  materials: {}
}

export function DoorFrame({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.DOOR_FRAME) as GLTFResult

  const doorFrameMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.DOOR_FRAME.DIFFUSE.FOUR_K,
  )
  doorFrameMap.flipY = false

  const doorFrameMaterial = new THREE.MeshStandardMaterial({
    map: doorFrameMap,
  })

  return (
    <mesh
      geometry={nodes.DoorFrame.geometry}
      material={doorFrameMaterial}
      position={position}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.DOOR_FRAME)
