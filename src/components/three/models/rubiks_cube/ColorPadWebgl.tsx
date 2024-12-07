import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { MeshProps, ThreeEvent } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'
import { default as rubiksCubeConstants } from '@/constants/three/rubiksCubeConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    ColorPadWebgl: THREE.Mesh
  }
  materials: {}
}

const ColorPadWebgl = forwardRef<
  THREE.Mesh<
    THREE.BufferGeometry<THREE.NormalBufferAttributes>,
    THREE.Material | THREE.Material[],
    THREE.Object3DEventMap
  >,
  MeshProps
>(function ColorPadWebgl({ name, position, rotation, onPointerOver, onPointerLeave }, ref) {
  const { nodes } = useGLTF(gltfConstants.RUBIKS_CUBE.COLOR_PAD_WEBGL) as GLTFResult

  return (
    <mesh
      ref={ref}
      name={name}
      geometry={nodes.ColorPadWebgl.geometry}
      position={position}
      rotation={rotation}
      receiveShadow
      castShadow
      onPointerOver={onPointerOver}
      onPointerLeave={onPointerLeave}
    >
      <meshStandardMaterial
        attach='material'
        roughness={rubiksCubeConstants.RUBIKS_CUBE.PADS.ROUGHNESS}
      />
    </mesh>
  )
})

useGLTF.preload(gltfConstants.RUBIKS_CUBE.COLOR_PAD_WEBGL)

export default ColorPadWebgl
