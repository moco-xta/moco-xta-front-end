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
  trinityFrameMap.flipY = false
  const trinityFrameRoughnessMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.TRINITY_FRAME.ROUGHNESS.ONE_K,
  )
  trinityFrameRoughnessMap.flipY = false
  const trinityFrameNormalMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.TRINITY_FRAME.NORMAL.ONE_K,
  )
  trinityFrameNormalMap.flipY = false

  const trinityFrameMaterial = new THREE.MeshStandardMaterial({
    map: trinityFrameMap,
    roughness: 0.8,
    roughnessMap: trinityFrameRoughnessMap,
    normalMap: trinityFrameNormalMap,
  })

  const trinityMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.TRINITY.DIFFUSE,
  )
  trinityFrameMap.flipY = false

  const trinityMaterial = new THREE.MeshStandardMaterial({
    map: trinityMap,
    roughness: 1,
  })

  return (
    <group
      position={position}
      dispose={null}
    >
      <group
        name='Trinity'
        position={[-17.09, 19.2, -16]}
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
    </group>
  )
}

useGLTF.preload(gltfConstants.ABOUT.TRINITY)
