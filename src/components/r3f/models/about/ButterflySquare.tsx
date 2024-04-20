import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/gltfConstants.json'
import { default as texturesConstants } from '@/constants/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    ButterflySquare: THREE.Mesh
  }
  materials: {}
}

export function ButterflySquare({
  position,
  rotation,
}: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(gltfConstants.BUTTERFLY_SQUARE) as GLTFResult
  return (
    <mesh
      geometry={nodes.ButterflySquare.geometry}
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

useGLTF.preload(gltfConstants.BUTTERFLY_SQUARE)
