import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { ColorPadInterface } from '@/interfaces/r3fInterfaces'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    ColorPadJavascript: THREE.Mesh
  }
  materials: {}
}

export function ColorPadJavascript({
  position,
  rotation,
  color
}: ColorPadInterface) {
  const { nodes } = useGLTF(gltfConstants.COLOR_PAD_JAVASCRIPT) as GLTFResult
  return (
    <mesh
      geometry={nodes.ColorPadJavascript.geometry}
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

useGLTF.preload(gltfConstants.COLOR_PAD_JAVASCRIPT)
