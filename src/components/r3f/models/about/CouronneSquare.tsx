import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/gltfConstants.json'
import { default as texturesConstants } from '@/constants/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    CouronneSquare_1: THREE.Mesh
    CouronneSquare_2: THREE.Mesh
  }
  materials: {}
}

export function CouronneSquare({ position, rotation }: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(gltfConstants.COURONNE_SQUARE) as GLTFResult
  return (
    <group position={position} rotation={rotation}>
      <mesh geometry={nodes.CouronneSquare_1.geometry} receiveShadow castShadow>
      <meshStandardMaterial
        attach='material'
        color={'white'}
      />
    </mesh>
      <mesh geometry={nodes.CouronneSquare_2.geometry} receiveShadow castShadow>
      <meshStandardMaterial
        attach='material'
        color={'white'}
      />
    </mesh>
    </group>
  )
}

useGLTF.preload(gltfConstants.COURONNE_SQUARE)
