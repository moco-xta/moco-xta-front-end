import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { Speaker } from './Speaker'

import {
  speakerBoxMaterial,
  speakerStandMaterial,
} from '@/components/new/three/materials/about/laboratoire/final_render/laboratoireFinalRenderMaterials'

import { default as laboratoireFinalRenderConstants } from '@/constants/new/canvas/about/laboratoire/laboratoireFinalRenderConstants.json'
import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    SpeakerBox_1: THREE.Mesh
    SpeakerBox_2: THREE.Mesh
  }
  materials: {}
}

export function SpeakerBox({ name, position }: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SPEAKERS_COLLECTION.SPEAKER_BOX) as GLTFResult

  return (
    <group
      name={name}
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
      {[...Array(laboratoireFinalRenderConstants.SPEAKERS_COLLECTION.SPEAKERS.NUMBER)].map((_, index) => (
        <Speaker
          key={`speaker_${name}_${index}`}
          name={`speaker_${name}_${index}`}
          position={[0, laboratoireFinalRenderConstants.SPEAKERS_COLLECTION.SPEAKERS.GAP * index, 0]}
        />
      ))}
    </group>
  )
}

useGLTF.preload(gltfConstants.ABOUT.LABORATOIRE.FINAL_RENDER.SPEAKERS_COLLECTION.SPEAKER_BOX)
