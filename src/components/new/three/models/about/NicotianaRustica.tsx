import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    NicotianaRustica_1: THREE.Mesh
    NicotianaRustica_2: THREE.Mesh
  }
  materials: {}
}

export function NicotianaRustica({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.NICOTIANA_RUSTICA) as GLTFResult

  const nicotianaRusticaFrameMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.NICOTIANA_RUSTICA_FRAME.DIFFUSE.ONE_K,
  )
  const nicotianaRusticaFrameRoughnessMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.NICOTIANA_RUSTICA_FRAME.ROUGHNESS.FOUR_K,
  )
  const nicotianaRusticaFrameNormalMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.NICOTIANA_RUSTICA_FRAME.NORMAL.FOUR_K,
  )
  nicotianaRusticaFrameMap.flipY = false
  nicotianaRusticaFrameRoughnessMap.flipY = false
  nicotianaRusticaFrameNormalMap.flipY = false

  const nicotianaRusticaFrameMaterial = new THREE.MeshStandardMaterial({
    map: nicotianaRusticaFrameMap,
    metalness: 0.5,
    /* metalnessMap: nicotianaRusticaFrameRoughnessMap, */
    roughness: 0.2,
    /* roughnessMap: nicotianaRusticaFrameRoughnessMap, */
    normalMap: nicotianaRusticaFrameNormalMap,
  })

  const nicotianaRusticaMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.NICOTIANA_RUSTICA.DIFFUSE.ONE_K,
  )
  nicotianaRusticaMap.flipY = false

  const nicotianaRusticaMaterial = new THREE.MeshStandardMaterial({
    map: nicotianaRusticaMap,
  })

  return (
    <group
      name='NicotianaRustica'
      position={position}
      dispose={null}
    >
      <mesh
        name='NicotianaRustica_1'
        geometry={nodes.NicotianaRustica_1.geometry}
        material={nicotianaRusticaFrameMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='NicotianaRustica_2'
        geometry={nodes.NicotianaRustica_2.geometry}
        material={nicotianaRusticaMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.ABOUT.TRESTLE)
