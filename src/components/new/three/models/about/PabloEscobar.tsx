import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    PabloEscobar: THREE.Mesh
  }
  materials: {}
}

export function PabloEscobar({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.PABLO_ESCOBAR) as GLTFResult

  const pabloEscobarMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.PABLO_ESCOBAR.DIFFUSE,
  )
  pabloEscobarMap.flipY = false

  const pabloEscobarmaterial = new THREE.MeshStandardMaterial({
    color: '#ddd',
    map: pabloEscobarMap,
    roughness: 0.3,
    side: THREE.DoubleSide,
  })

  return (
    <mesh
      geometry={nodes.PabloEscobar.geometry}
      material={pabloEscobarmaterial}
      position={position}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.PABLO_ESCOBAR)
