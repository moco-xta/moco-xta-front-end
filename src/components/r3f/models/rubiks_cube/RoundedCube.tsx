import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    RoundedCube: THREE.Mesh
  }
  materials: {}
}

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>
>

export function RoundedCube({
  position,
  rotation,
}: JSX.IntrinsicElements['mesh']) {
  const { nodes, materials } = useGLTF(gltfConstants.ROUNDED_CUBE) as GLTFResult
  return (
    <mesh
      geometry={nodes.RoundedCube.geometry}
      position={position}
      rotation={rotation}
    >
      <meshStandardMaterial
        attach='material'
        color={0x000000}
        roughness={0.2}
      />
    </mesh>
  )
}

useGLTF.preload(gltfConstants.ROUNDED_CUBE)
