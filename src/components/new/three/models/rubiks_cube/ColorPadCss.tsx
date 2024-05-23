import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    ColorPadCss: THREE.Mesh
  }
  materials: {}
}

const ColorPadCss = forwardRef<
  THREE.Mesh<
    THREE.BufferGeometry<THREE.NormalBufferAttributes>,
    THREE.Material | THREE.Material[],
    THREE.Object3DEventMap
  >,
  MeshProps
>(function ColorPadCss({ name, position, rotation }, ref) {
  const { nodes } = useGLTF(
    gltfConstants.RUBIKS_CUBE.COLOR_PAD_CSS,
  ) as GLTFResult
  return (
    <mesh
      name={name}
      geometry={nodes.ColorPadCss.geometry}
      position={position}
      rotation={rotation}
      receiveShadow
      castShadow
    >
      <meshStandardMaterial attach='material' />
    </mesh>
  )
})

useGLTF.preload(gltfConstants.RUBIKS_CUBE.COLOR_PAD_CSS)

export default ColorPadCss
