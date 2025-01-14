import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { Speaker } from './Speaker'

import { laboratoryData } from '@/data/about/three/laboratoryData'
import { materialsData } from '@/data/about/three/materialsData'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    SpeakerBox_1: THREE.Mesh
    SpeakerBox_2: THREE.Mesh
  }
  materials: {
    speaker_box_material: THREE.MeshPhysicalMaterial
    speaker_stand: THREE.MeshStandardMaterial
  }
}

export function SpeakerBox(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.LABORATORY.SPEAKER_BOX) as GLTFResult

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.SpeakerBox_1.geometry}
        material={materials.speaker_box_material}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.SpeakerBox_2.geometry}
        material={materialsData.toDoMaterial}
        receiveShadow
        castShadow
      />
      {[...Array(laboratoryData.speakers.number)].map((_, index) => (
        <Speaker
          key={`speaker_${props.name}_${index}`}
          name={`speaker_${props.name}_${index}`}
          position={[0, laboratoryData.speakers.gap * index, 0]}
        />
      ))}
    </group>
  )
}

useGLTF.preload(glbConstants.LABORATORY.SPEAKER_BOX)
