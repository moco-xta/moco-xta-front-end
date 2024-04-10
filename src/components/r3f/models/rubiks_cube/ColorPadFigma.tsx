import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    ColorPadFigma: THREE.Mesh
  }
  materials: {}
}

const ColorPadFigma = forwardRef<
  THREE.Mesh<
    THREE.BufferGeometry<THREE.NormalBufferAttributes>,
    THREE.Material | THREE.Material[],
    THREE.Object3DEventMap
  >,
  MeshProps
>(function ColorPadFigma({ name, position, rotation }, ref) {
  const { nodes } = useGLTF(gltfConstants.COLOR_PAD_FIGMA) as GLTFResult
  return (
    <mesh
      name={name}
      geometry={nodes.ColorPadFigma.geometry}
      position={position}
      rotation={rotation}
      receiveShadow
      castShadow
    >
      <meshStandardMaterial attach='material' />
    </mesh>
  )
})

useGLTF.preload(gltfConstants.COLOR_PAD_FIGMA)

export default ColorPadFigma
