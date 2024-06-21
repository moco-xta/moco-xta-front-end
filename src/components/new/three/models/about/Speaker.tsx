import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Speaker: THREE.Mesh
  }
  materials: {}
}

export function Speaker({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.SPEAKER) as GLTFResult

  return (
    <mesh
      geometry={nodes.Speaker.geometry}
      position={position}
      receiveShadow
      castShadow
    >
      <meshStandardMaterial
        attach='material'
        color={'black'}
        roughness={0.8}
      />
    </mesh>
  )
}

useGLTF.preload(gltfConstants.ABOUT.SPEAKER)
