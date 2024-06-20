import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    DeskChair_1: THREE.Mesh
    DeskChair_2: THREE.Mesh
    DeskChair_3: THREE.Mesh
  }
  materials: {}
}

export function DeskChair({
  position,
  rotation,
}: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.DESK_CHAIR) as GLTFResult

  const deskChairLegMaterial = new THREE.MeshStandardMaterial({
    color: '#999999',
    metalness: 0.8,
    roughness: 0.1,
  })

  const deskChairLeatherMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.DESK_CHAIR_LEATHER.DIFFUSE.FOUR_K,
  )
  deskChairLeatherMap.flipY = false
  const deskChairLeatherRoughnessMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.DESK_CHAIR_LEATHER.ROUGHNESS.FOUR_K,
  )
  deskChairLeatherRoughnessMap.flipY = false
  const deskChairLeatherNormalMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.DESK_CHAIR_LEATHER.NORMAL.FOUR_K,
  )
  deskChairLeatherNormalMap.flipY = false

  const deskChairLeatherMaterial = new THREE.MeshStandardMaterial({
    color: '#706060',
    map: deskChairLeatherMap,
    roughnessMap: deskChairLeatherRoughnessMap,
    normalMap: deskChairLeatherNormalMap,
  })

  const deskChairWheelsMaterial = new THREE.MeshStandardMaterial({
    color: '#000',
    metalness: 0,
    roughness: 0.6,
  })

  return (
    <group
      position={position}
      rotation={rotation}
      dispose={null}
    >
      <mesh
        name='DeskChair_1'
        geometry={nodes.DeskChair_1.geometry}
        material={deskChairLegMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='DeskChair_2'
        geometry={nodes.DeskChair_2.geometry}
        material={deskChairLeatherMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='DeskChair_3'
        geometry={nodes.DeskChair_3.geometry}
        material={deskChairWheelsMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.ABOUT.DESK_CHAIR)
