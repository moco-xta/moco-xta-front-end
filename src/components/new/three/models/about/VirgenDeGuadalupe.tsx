import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    VirgenDeGuadalupe: THREE.Mesh
  }
  materials: {}
}

export function VirgenDeGuadalupe({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(
    gltfConstants.ABOUT.VIRGEN_DE_GUADALUPE,
  ) as GLTFResult

  const map = useTextureLoader(
    texturesConstants.ABOUT.FINAL.VIRGEN_DE_GUADALUPE.DIFFUSE.ONE_K,
  )
  map.flipY = false

  return (
    <mesh
      geometry={nodes.VirgenDeGuadalupe.geometry}
      position={position}
      receiveShadow
      castShadow
    >
      <meshStandardMaterial
        attach='material'
        map={map}
        roughness={0.5}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

useGLTF.preload(gltfConstants.ABOUT.VIRGEN_DE_GUADALUPE)
