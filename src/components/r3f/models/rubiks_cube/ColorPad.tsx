import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { ColorPadInterface } from '@/interfaces/r3fInterfaces'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    ColorPad: THREE.Mesh
  }
  materials: {}
}

export function ColorPad({
  type,
  position,
  rotation,
  color,
}: ColorPadInterface) {
  const { nodes } = useGLTF(gltfConstants.COLOR_PAD) as GLTFResult
  return (
    <mesh
      name={type}
      geometry={nodes.ColorPad.geometry}
      position={position}
      rotation={rotation}
    >
      <meshStandardMaterial
        attach='material'
        color={color}
      />
    </mesh>
  )
}

useGLTF.preload(gltfConstants.COLOR_PAD)
