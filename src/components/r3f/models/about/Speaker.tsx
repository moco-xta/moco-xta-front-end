import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/gltfConstants.json'
import { default as texturesConstants } from '@/constants/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Speaker: THREE.Mesh
  }
  materials: {}
}

export function Speaker({ position }: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(gltfConstants.SPEAKER) as GLTFResult
  return (
    <mesh geometry={nodes.Speaker.geometry} position={position} receiveShadow castShadow>
      <meshStandardMaterial
        attach='material'
        color={'white'}
      />
    </mesh>
  )
}

useGLTF.preload(gltfConstants.SPEAKER)
