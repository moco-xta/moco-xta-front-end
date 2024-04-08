import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Button: THREE.Mesh
  }
  materials: {
    button_material: THREE.MeshStandardMaterial
  }
}

export function Button({
  position,
  rotation,
  onClick,
}: JSX.IntrinsicElements['mesh']) {
  const { nodes, materials } = useGLTF(gltfConstants.BUTTON) as GLTFResult
  return (
    <mesh
      geometry={nodes.Button.geometry}
      position={position}
      rotation={rotation}
      onClick={onClick}
    >
      <meshStandardMaterial
        attach='material'
        transparent
        opacity={0}
      />
    </mesh>
  )
}

useGLTF.preload(gltfConstants.BUTTON)
