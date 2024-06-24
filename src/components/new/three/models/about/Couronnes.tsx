import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Couronnes_1: THREE.Mesh
    Couronnes_2: THREE.Mesh
  }
  materials: {}
}

export function Couronnes({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.COURONNES) as GLTFResult

  const couronnesMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.COURONNES.DIFFUSE,
  )
  const couronnesRoughnessMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.COURONNES.ROUGHNESS,
  )
  const couronnesNormalMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.COURONNES.NORMAL,
  )
  couronnesMap.flipY = false
  couronnesRoughnessMap.flipY = false
  couronnesNormalMap.flipY = false

  const couronnesMaterial = new THREE.MeshStandardMaterial({
    map: couronnesMap,
    metalness: 0.3,
    metalnessMap: couronnesRoughnessMap,
    roughness: 0.2,
    roughnessMap: couronnesRoughnessMap,
    normalMap: couronnesNormalMap,
  })

  return (
    <group
      name='Couronnes'
      position={position}
      dispose={null}
    >
      <mesh
        name='Couronnes_1'
        geometry={nodes.Couronnes_1.geometry}
        material={couronnesMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='Couronnes_2'
        geometry={nodes.Couronnes_2.geometry}
        material={couronnesMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.ABOUT.COURONNES)
