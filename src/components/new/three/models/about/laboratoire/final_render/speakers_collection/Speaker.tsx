import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { speakerMaterial } from '@/components/new/three/materials/about/laboratoire/final_render/laboratoireFinalRenderMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Speaker: THREE.Mesh
  }
  materials: {}
}

export function Speaker({ name, position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SPEAKERS_COLLECTION.SPEAKER,
  ) as GLTFResult

  return (
    <mesh
      name={name}
      geometry={nodes.Speaker.geometry}
      material={speakerMaterial}
      position={position}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SPEAKERS_COLLECTION.SPEAKER)
