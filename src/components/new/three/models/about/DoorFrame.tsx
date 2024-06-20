import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { wallSimpleMaterial } from '../../materials/laboratoireMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    DoorFrame: THREE.Mesh
  }
  materials: {}
}

export function DoorFrame({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.DOOR_FRAME) as GLTFResult

  return (
    <mesh
      geometry={nodes.DoorFrame.geometry}
      material={wallSimpleMaterial}
      position={position}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.DOOR_FRAME)
