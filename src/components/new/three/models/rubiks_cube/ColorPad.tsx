import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { ColorPadInterface } from '@/interfaces/new/threeInterfaces'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

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
  const { nodes } = useGLTF(gltfConstants.RUBIKS_CUBE.COLOR_PAD) as GLTFResult
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

useGLTF.preload(gltfConstants.RUBIKS_CUBE.COLOR_PAD)
