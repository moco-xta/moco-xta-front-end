import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { ColorPadInterface } from '@/interfaces/r3fInterfaces'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    ColorPadPostgresql: THREE.Mesh
  }
  materials: {}
}

export function ColorPadPostgresql({
  position,
  rotation,
  color
}: ColorPadInterface) {
  const { nodes } = useGLTF(gltfConstants.COLOR_PAD_POSTGRESQL) as GLTFResult
  return (
    <mesh
      geometry={nodes.ColorPadPostgresql.geometry}
      position={position}
      rotation={rotation}
      receiveShadow
      castShadow
    >
      <meshStandardMaterial
        attach='material'
        color={color}
      />
    </mesh>
  )
}

useGLTF.preload(gltfConstants.COLOR_PAD_POSTGRESQL)
