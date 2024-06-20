import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { ironSimpleMaterial } from '../../materials/standardsMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    TransfertBox_1: THREE.Mesh
    TransfertBox_2: THREE.Mesh
  }
  materials: {}
}

export function TransfertBox({
  position,
  rotation,
}: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.TRANSFERT_BOX) as GLTFResult

  const map = useTextureLoader(
    texturesConstants.ABOUT.TRANSFERT_BOX.DIFFUSE.ONE_K,
  )
  map.flipY = false

  return (
    <group
      position={position}
      rotation={rotation}
      dispose={null}
    >
      <mesh
        name='TransfertBox_1'
        geometry={nodes.TransfertBox_1.geometry}
        receiveShadow
        castShadow
      >
        <meshStandardMaterial
          attach='material'
          roughness={1}
          side={THREE.DoubleSide}
          map={map}
        />
      </mesh>
      <mesh
        name='TransfertBox_2'
        geometry={nodes.TransfertBox_2.geometry}
        material={ironSimpleMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.ABOUT.TRANSFERT_BOX)
