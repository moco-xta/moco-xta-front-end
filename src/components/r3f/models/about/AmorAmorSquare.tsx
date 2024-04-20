import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/gltfConstants.json'
import { default as texturesConstants } from '@/constants/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    AmorAmorSquare: THREE.Mesh
  }
  materials: {}
}

export function AmorAmorSquare({
  position,
  rotation,
}: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.AMOR_AMOR_SQUARE) as GLTFResult
  return (
    <mesh
      geometry={nodes.AmorAmorSquare.geometry}
      position={position}
      rotation={rotation}
      receiveShadow
      castShadow
    >
      <meshStandardMaterial
        attach='material'
        color={'white'}
      />
    </mesh>
  )
}

useGLTF.preload(gltfConstants.AMOR_AMOR_SQUARE)
