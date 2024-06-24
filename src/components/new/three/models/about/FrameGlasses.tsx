import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { glassFramesMaterial } from '../../materials/standardsMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    FrameGlasses: THREE.Mesh
  }
  materials: {}
}

export function FrameGlasses({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.FRAME_GLASSES) as GLTFResult

  return (
    <mesh
      geometry={nodes.FrameGlasses.geometry}
      material={glassFramesMaterial}
      position={position}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.FRAME_GLASSES)
