import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    TransfertBox: THREE.Mesh
  }
  materials: {}
}

export function TransfertBox({
  position,
  rotation,
}: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.TRANSFERT_BOX) as GLTFResult

  /* const map = useTextureLoader(texturesConstants.ABOUT.TRESTLE.DIFFUSE.FOUR_K)
  map.flipY = false */

  return (
    <mesh
      geometry={nodes.TransfertBox.geometry}
      position={position}
      rotation={rotation}
      receiveShadow
      castShadow
    >
      <meshStandardMaterial
        attach='material'
        color={'grey'}
        roughness={1}
        side={THREE.DoubleSide}
        /* map={map} */
      />
    </mesh>
  )
}

useGLTF.preload(gltfConstants.ABOUT.TRANSFERT_BOX)
