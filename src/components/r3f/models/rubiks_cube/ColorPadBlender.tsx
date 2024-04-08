import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { ColorPadInterface } from '@/interfaces/r3fInterfaces'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    ColorPadBlender: THREE.Mesh
  }
  materials: {}
}

export function ColorPadBlender({
  position,
  rotation,
  color
}: ColorPadInterface) {
  const { nodes } = useGLTF(gltfConstants.COLOR_PAD_BLENDER) as GLTFResult
  return (
    <mesh
      geometry={nodes.ColorPadBlender.geometry}
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

useGLTF.preload(gltfConstants.COLOR_PAD_BLENDER)
