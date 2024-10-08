import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { glassMaterial } from '@/components/three/materials/about/laboratoire/laboratoireMaterials'

import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    FrameGlasses: THREE.Mesh
  }
  materials: {}
}

export function FrameGlasses({}: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.FRAME_GLASSES,
  ) as GLTFResult

  return (
    <mesh
      name='FrameGlasses'
      geometry={nodes.FrameGlasses.geometry}
      material={glassMaterial}
    />
  )
}

useGLTF.preload(
  gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.WALLS_COLLECTION.FRAMES_COLLECTION.FRAME_GLASSES,
)
