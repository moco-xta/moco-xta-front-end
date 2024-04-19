import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/gltfConstants.json'
import { default as texturesConstants } from '@/constants/texturesConstants.json'
import { Speaker } from './Speaker'

type GLTFResult = GLTF & {
  nodes: {
    SpeakerEnclosure: THREE.Mesh
  }
  materials: {}
}

export function SpeakerEnclosure({ position, rotation }: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(gltfConstants.SPEAKER_ENCLOSURE) as GLTFResult
  return (
    <group
      position={position}
      rotation={rotation}
    >
      <mesh geometry={nodes.SpeakerEnclosure.geometry} receiveShadow castShadow>
        <meshStandardMaterial
          attach='material'
          color={'white'}
        />
      </mesh>
      <Speaker />
      <Speaker position={[0, -1.79, 0]} />
      <Speaker position={[0, 2 * -1.79, 0]} />
      <Speaker position={[0, 3 * -1.79, 0]} />
    </group>
  )
}

useGLTF.preload(gltfConstants.SPEAKER_ENCLOSURE)
