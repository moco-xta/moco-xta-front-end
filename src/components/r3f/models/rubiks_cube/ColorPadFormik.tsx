import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    ColorPadFormik: THREE.Mesh
  }
  materials: {}
}

const ColorPadFormik = forwardRef<
  THREE.Mesh<
    THREE.BufferGeometry<THREE.NormalBufferAttributes>,
    THREE.Material | THREE.Material[],
    THREE.Object3DEventMap
  >,
  MeshProps
>(function ColorPadFormik({ name, position, rotation }, ref) {
  const { nodes } = useGLTF(gltfConstants.COLOR_PAD_FORMIK) as GLTFResult
  return (
    <mesh
      name={name}
      geometry={nodes.ColorPadFormik.geometry}
      position={position}
      rotation={rotation}
      receiveShadow
      castShadow
    >
      <meshStandardMaterial attach='material' />
    </mesh>
  )
})

useGLTF.preload(gltfConstants.COLOR_PAD_FORMIK)

export default ColorPadFormik
