import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import {
  screenFrameMaterial,
  screenMaterial,
} from '@/components/new/three/materials/about/laboratoire/final_render/laboratoireFinalRenderMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Screen_1: THREE.Mesh
    Screen_2: THREE.Mesh
  }
  materials: {}
}

export function Screen({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.SCREEN) as GLTFResult

  return (
    <group position={position}>
      <mesh
        geometry={nodes.Screen_1.geometry}
        material={screenMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Screen_2.geometry}
        material={screenFrameMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.ABOUT.SCREEN)
