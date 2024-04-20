import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/gltfConstants.json'
import { default as texturesConstants } from '@/constants/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Trestle: THREE.Mesh
  }
  materials: {}
}

export function Trestle({ position }: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(gltfConstants.TRESTLE) as GLTFResult

  const map = useTextureLoader(texturesConstants.TRESTLE_DIFFUSE)
  map.flipY = false

  return (
    <mesh
      geometry={nodes.Trestle.geometry}
      position={position}
      receiveShadow
      castShadow
    >
      <meshStandardMaterial
        attach='material'
        map={map}
      />
    </mesh>
  )
}

useGLTF.preload(gltfConstants.TRESTLE)
