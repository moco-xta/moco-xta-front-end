import React, { forwardRef } from 'react'
import { useDispatch } from 'react-redux'
import * as THREE from 'three'
import { MeshProps, ThreeEvent } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { AppDispatch } from '@/redux/store'
import { setSelectedPad } from '@/redux/slice/rubiksCubeSlice'

import { LogoNextjs } from '../logos'

import { default as gltfConstants } from '@/constants/assets/gltfConstants.json'

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
>(function ColorPadWebgl({ name, position, rotation }, ref) {
  const { nodes } = useGLTF(gltfConstants.RUBIKS_CUBE.COLOR_PAD_WEBGL) as GLTFResult

  const dispatch = useDispatch<AppDispatch>()

  const handleOnPointerEnter = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation()
    // @ts-ignore
    console.log(ref.current.name)
    dispatch(setSelectedPad(<LogoNextjs />))
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
      geometry={nodes.ColorPadWebgl.geometry}
      position={position}
      rotation={rotation}
      receiveShadow
      castShadow
      onPointerOver={handleOnPointerEnter}
      onPointerLeave={handleOnPointerLeave}
    >
      <meshStandardMaterial attach='material' />
    </mesh>
  )
})

useGLTF.preload(gltfConstants.RUBIKS_CUBE.COLOR_PAD_WEBGL)

export default ColorPadWebgl
