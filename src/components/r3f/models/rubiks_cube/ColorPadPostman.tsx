import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    ColorPadPostman: THREE.Mesh
  }
  materials: {}
}

const ColorPadPostman = forwardRef<
  THREE.Mesh<
    THREE.BufferGeometry<THREE.NormalBufferAttributes>,
    THREE.Material | THREE.Material[],
    THREE.Object3DEventMap
  >,
  MeshProps
>(function ColorPadPostman({ name, position, rotation }, ref) {
  const { nodes } = useGLTF(gltfConstants.COLOR_PAD_POSTMAN) as GLTFResult
  return (
    <mesh
      name={name}
      geometry={nodes.ColorPadPostman.geometry}
      position={position}
      rotation={rotation}
      receiveShadow
      castShadow
    >
      <meshStandardMaterial attach='material' />
    </mesh>
  )
})

useGLTF.preload(gltfConstants.COLOR_PAD_POSTMAN)

export default ColorPadPostman
