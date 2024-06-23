import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    CelestialMap_1: THREE.Mesh
    CelestialMap_2: THREE.Mesh
  }
  materials: {}
}

export function CelestialMap({ position }: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.CELESTIAL_MAP) as GLTFResult

  const celestialMapFrameMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.CELESTIAL_MAP_FRAME.DIFFUSE.FOUR_K,
  )
  const celestialMapFrameRoughnessMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.CELESTIAL_MAP_FRAME.ROUGHNESS.FOUR_K,
  )
  const celestialMapFrameNormalMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.CELESTIAL_MAP_FRAME.NORMAL.FOUR_K,
  )
  celestialMapFrameMap.flipY = false
  celestialMapFrameRoughnessMap.flipY = false
  celestialMapFrameNormalMap.flipY = false

  const celestialMapFrameMaterial = new THREE.MeshStandardMaterial({
    color: '#433',
    map: celestialMapFrameMap,
    roughness: 0.3,
    /* metalnessMap: celestialMapFrameRoughnessMap, */
    /* roughnessMap: celestialMapFrameRoughnessMap, */
    normalMap: celestialMapFrameNormalMap,
  })

  const celestialMapMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.CELESTIAL_MAP.DIFFUSE.ONE_K,
  )
  celestialMapMap.flipY = false

  const celestialMapMaterial = new THREE.MeshStandardMaterial({
    map: celestialMapMap,
  })

  return (
    <group
      name='CelestialMap'
      position={position}
      dispose={null}
    >
      <mesh
        name='CelestialMap_1'
        geometry={nodes.CelestialMap_1.geometry}
        material={celestialMapFrameMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='CelestialMap_2'
        geometry={nodes.CelestialMap_2.geometry}
        material={celestialMapMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.ABOUT.CELESTIAL_MAP)
