import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Brain_1: THREE.Mesh
    Brain_2: THREE.Mesh
  }
  materials: {}
}

export function Brain({ position }: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.BRAIN) as GLTFResult

  const brainFrameMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.BRAIN_FRAME.DIFFUSE.FOUR_K,
  )
  const brainFrameRoughnessMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.BRAIN_FRAME.ROUGHNESS.FOUR_K,
  )
  const brainFrameNormalMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.BRAIN_FRAME.NORMAL.FOUR_K,
  )
  brainFrameMap.flipY = false
  brainFrameRoughnessMap.flipY = false
  brainFrameNormalMap.flipY = false

  const brainFrameMaterial = new THREE.MeshStandardMaterial({
    map: brainFrameMap,
    roughnessMap: brainFrameRoughnessMap,
    normalMap: brainFrameNormalMap,
  })

  const brainMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.BRAIN.DIFFUSE.ONE_K,
  )
  brainMap.flipY = false

  const brainMaterial = new THREE.MeshStandardMaterial({
    map: brainMap,
    roughness: 1,
  })

  return (
    <group
      name='Brain'
      position={position}
      dispose={null}
    >
      <mesh
        name='Brain_1'
        geometry={nodes.Brain_1.geometry}
        material={brainFrameMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='Brain_2'
        geometry={nodes.Brain_2.geometry}
        material={brainMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.ABOUT.BRAIN)
