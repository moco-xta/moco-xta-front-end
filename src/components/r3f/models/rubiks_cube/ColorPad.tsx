import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { ColorPadInterface } from '@/interfaces/r3fInterfaces'

import { default as gltfConstants } from '@/constants/gltfConstants.json'
import { Arrow } from './Arrow'

type GLTFResult = GLTF & {
  nodes: {
    ColorPad: THREE.Mesh
  }
  materials: {}
}

export function ColorPad({
  position,
  rotation,
  onClick,
  onPointerMove,
  color,
}: ColorPadInterface) {
  const { nodes } = useGLTF(gltfConstants.COLOR_PAD) as GLTFResult
  return (
    <group
      position={position}
      rotation={rotation}
    >
      <mesh
        geometry={nodes.ColorPad.geometry}
        onClick={onClick}
        onPointerMove={onPointerMove}
      >
        <meshStandardMaterial
          attach='material'
          color={color}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload(gltfConstants.COLOR_PAD)
