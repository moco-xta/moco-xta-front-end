import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    ColorPadPostgresql: THREE.Mesh
  }
  materials: {}
}

const ColorPadPostgresql = forwardRef<
  THREE.Mesh<
    THREE.BufferGeometry<THREE.NormalBufferAttributes>,
    THREE.Material | THREE.Material[],
    THREE.Object3DEventMap
  >,
  MeshProps
>(function ColorPadPostgresql({ name, position, rotation }, ref) {
  const { nodes } = useGLTF(gltfConstants.COLOR_PAD_POSTGRESQL) as GLTFResult
  return (
    <mesh
      name={name}
      geometry={nodes.ColorPadPostgresql.geometry}
      position={position}
      rotation={rotation}
      receiveShadow
      castShadow
    >
      <meshStandardMaterial attach='material' />
    </mesh>
  )
})

useGLTF.preload(gltfConstants.COLOR_PAD_POSTGRESQL)

export default ColorPadPostgresql
