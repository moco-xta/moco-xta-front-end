import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { MeshProps, ThreeEvent } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'
import { default as rubiksCubeConstants } from '@/constants/canvas/rubiksCubeConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    ColorPadTypescript: THREE.Mesh
  }
  materials: {}
}

const ColorPadTypescript = forwardRef<
  THREE.Mesh<
    THREE.BufferGeometry<THREE.NormalBufferAttributes>,
    THREE.Material | THREE.Material[],
    THREE.Object3DEventMap
  >,
  MeshProps
>(function ColorPadTypescript({ name, position, rotation }, ref) {
  const { nodes } = useGLTF(gltfConstants.RUBIKS_CUBE.COLOR_PAD_TYPESCRIPT) as GLTFResult

  const handleOnPointerEnter = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation()
    // @ts-ignore
    console.log(ref.current.name)
    // @ts-ignore
    ref.current.material.emissiveIntensity = 5
    // @ts-ignore
    ref.current.material.emissive = ref.current.material.color
  }

  const handleOnPointerLeave = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation()
    // @ts-ignore
    ref.current.material.emissiveIntensity = 1
    // @ts-ignore
    ref.current.material.emissive = {
      isColor: true,
      r: 0,
      g: 0,
      b: 0,
    }
  }

  return (
    <mesh
      ref={ref}
      name={name}
      geometry={nodes.ColorPadTypescript.geometry}
      position={position}
      rotation={rotation}
      receiveShadow
      castShadow
      onPointerOver={handleOnPointerEnter}
      onPointerLeave={handleOnPointerLeave}
    >
      <meshStandardMaterial
        attach='material'
        roughness={rubiksCubeConstants.RUBIKS_CUBE.PADS.ROUGHNESS}
      />
    </mesh>
  )
})

useGLTF.preload(gltfConstants.RUBIKS_CUBE.COLOR_PAD_TYPESCRIPT)

export default ColorPadTypescript
