import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { MeshProps, ThreeEvent } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'
import { default as rubiksCubeConstants } from '@/constants/canvas/rubiksCubeConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    ColorPadReactThreeDrei: THREE.Mesh
  }
  materials: {}
}

const ColorPadReactThreeDrei = forwardRef<
  THREE.Mesh<
    THREE.BufferGeometry<THREE.NormalBufferAttributes>,
    THREE.Material | THREE.Material[],
    THREE.Object3DEventMap
  >,
  MeshProps
>(function ColorPadReactThreeDrei(
  { name, position, rotation, onPointerOver, onPointerLeave },
  ref,
) {
  const { nodes } = useGLTF(gltfConstants.RUBIKS_CUBE.COLOR_PAD_REACT_THREE_DREI) as GLTFResult

  return (
    <mesh
      ref={ref}
      name={name}
      geometry={nodes.ColorPadReactThreeDrei.geometry}
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

useGLTF.preload(gltfConstants.RUBIKS_CUBE.COLOR_PAD_REACT_THREE_DREI)

export default ColorPadReactThreeDrei
