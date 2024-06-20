import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Trestle: THREE.Mesh
  }
  materials: {}
}

export function Trestle({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.TRESTLE) as GLTFResult

  const map = useTextureLoader(
    texturesConstants.ABOUT.FINAL.TRESTLE.DIFFUSE.ONE_K,
  )
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

useGLTF.preload(gltfConstants.ABOUT.TRESTLE)
