import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'
import { Speaker } from './Speaker'

type GLTFResult = GLTF & {
  nodes: {
    SpeakerBox_1: THREE.Mesh
    SpeakerBox_2: THREE.Mesh
  }
  materials: {}
}

export function SpeakerBox({ position }: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.SPEAKER_BOX) as GLTFResult

  const speakerBoxMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.SPEAKER_BOX.DIFFUSE.ONE_K,
  )
  const speakerBoxRoughnessMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.SPEAKER_BOX.ROUGHNESS.ONE_K,
  )
  const speakerBoxNormalMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.SPEAKER_BOX.NORMAL.ONE_K,
  )
  speakerBoxMap.flipY = false
  speakerBoxRoughnessMap.flipY = false
  speakerBoxNormalMap.flipY = false

  const speakerBoxMaterial = new THREE.MeshStandardMaterial({
    map: speakerBoxMap,
    roughnessMap: speakerBoxRoughnessMap,
    normalMap: speakerBoxNormalMap,
    side: THREE.DoubleSide,
  })

  const speakerStandMaterial = new THREE.MeshStandardMaterial({
    color: '#404040',
    metalness: 0.8,
    roughness: 0.5,
  })

  const speakerGap = 2.25

  return (
    <group
      name='SpeakerBox'
      position={position}
      dispose={null}
    >
      <mesh
        name='SpeakerBox_1'
        geometry={nodes.SpeakerBox_1.geometry}
        material={speakerBoxMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='SpeakerBox_2'
        geometry={nodes.SpeakerBox_2.geometry}
        material={speakerStandMaterial}
        receiveShadow
        castShadow
      />
      <Speaker />
      <Speaker position={[0, speakerGap * 1, 0]} />
      <Speaker position={[0, speakerGap * 2, 0]} />
      <Speaker position={[0, speakerGap * 3, 0]} />
    </group>
  )
}

useGLTF.preload(gltfConstants.ABOUT.SPEAKER_BOX)
