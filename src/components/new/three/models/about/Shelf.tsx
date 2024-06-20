import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Shelf: THREE.Mesh
  }
  materials: {}
}

export function Shelf({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.SHELF) as GLTFResult

  const map = useTextureLoader(texturesConstants.ABOUT.FINAL.SHELF.DIFFUSE.ONE_K)
  map.flipY = false

  const roughnessMap = useTextureLoader(texturesConstants.ABOUT.FINAL.SHELF.ROUGHNESS.ONE_K)
  roughnessMap.flipY = false

  const normalMap = useTextureLoader(texturesConstants.ABOUT.FINAL.SHELF.NORMAL.ONE_K)
  normalMap.flipY = false

  return (
    <mesh
      geometry={nodes.Shelf.geometry}
      position={position}
      receiveShadow
      castShadow
    >
      <meshStandardMaterial
        attach='material'
        map={map}
        roughnessMap={roughnessMap}
        normalMap={normalMap}
      />
    </mesh>
  )
}

useGLTF.preload(gltfConstants.ABOUT.SHELF)
