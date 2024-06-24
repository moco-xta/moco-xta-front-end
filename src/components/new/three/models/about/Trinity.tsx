import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Trinity_1: THREE.Mesh
    Trinity_2: THREE.Mesh
  }
  materials: {}
}

export function Trinity({ position }: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.TRINITY) as GLTFResult

  const trinityFrameMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.TRINITY_FRAME.DIFFUSE.ONE_K,
  )
  const trinityFrameRoughnessMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.TRINITY_FRAME.ROUGHNESS.ONE_K,
  )
  const trinityFrameNormalMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.TRINITY_FRAME.NORMAL.ONE_K,
  )
  trinityFrameMap.flipY = false
  trinityFrameRoughnessMap.flipY = false
  trinityFrameNormalMap.flipY = false

  const trinityFrameMaterial = new THREE.MeshPhysicalMaterial({
    map: trinityFrameMap,
    metalness: 0.4,
    metalnessMap: trinityFrameRoughnessMap,
    roughness: 0.6,
    roughnessMap: trinityFrameRoughnessMap,
    normalMap: trinityFrameNormalMap,
    specularColor: '#ffd970',
  })

  const trinityMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.TRINITY.DIFFUSE,
  )
  trinityMap.flipY = false

  const trinityMaterial = new THREE.MeshStandardMaterial({
    map: trinityMap,
    roughness: 1,
  })

  return (
    <group
      name='Trinity'
      position={position}
      dispose={null}
    >
      <mesh
        name='Trinity_1'
        geometry={nodes.Trinity_1.geometry}
        material={trinityFrameMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='Trinity_2'
        geometry={nodes.Trinity_2.geometry}
        material={trinityMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.ABOUT.TRINITY)
