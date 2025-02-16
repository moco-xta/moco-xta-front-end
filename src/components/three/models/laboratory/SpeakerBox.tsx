import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

import type { GLTFResult } from '@/types/data/components/three/types'

import { Speaker } from './Speaker'

import { laboratoryData } from '@/data/about/three/laboratoryData'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function SpeakerBox(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.LABORATORY.SPEAKER_BOX) as GLTFResult

  return (
    <RigidBody colliders='cuboid'>
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
          material={
            new THREE.MeshStandardMaterial({
              metalness: 1,
              roughness: 0.2,
            })
          }
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
    </RigidBody>
  )
}

useGLTF.preload(glbConstants.LABORATORY.SPEAKER_BOX)
