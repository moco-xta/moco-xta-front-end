import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    ColorPadHtml: THREE.Mesh
  }
  materials: {}
}

const ColorPadHtml = forwardRef<
  THREE.Mesh<
    THREE.BufferGeometry<THREE.NormalBufferAttributes>,
    THREE.Material | THREE.Material[],
    THREE.Object3DEventMap
  >,
  MeshProps
>(function ColorPadHtml({ name, position, rotation }, ref) {
  const { nodes } = useGLTF(
    gltfConstants.RUBIKS_CUBE.COLOR_PAD_HTML,
  ) as GLTFResult
  return (
    <mesh
      name={name}
      geometry={nodes.ColorPadHtml.geometry}
      position={position}
      rotation={rotation}
      receiveShadow
      castShadow
    >
      <meshStandardMaterial attach='material' />
    </mesh>
  )
})

useGLTF.preload(gltfConstants.RUBIKS_CUBE.COLOR_PAD_HTML)

export default ColorPadHtml
