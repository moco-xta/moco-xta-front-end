import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { ColorPadInterface } from '@/interfaces/r3fInterfaces'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    ColorPadSpring: THREE.Mesh
  }
  materials: {}
}

export function ColorPadSpring({
  position,
  rotation,
  color
}: ColorPadInterface) {
  const { nodes } = useGLTF(gltfConstants.COLOR_PAD_SPRING) as GLTFResult
  return (
    <mesh
      geometry={nodes.ColorPadSpring.geometry}
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

useGLTF.preload(gltfConstants.COLOR_PAD_SPRING)
