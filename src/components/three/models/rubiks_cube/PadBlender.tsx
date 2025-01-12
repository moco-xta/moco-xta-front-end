import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { padsData } from '@/data/skills/rubiks_cube/three/padsData'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    PadBlender: THREE.Mesh
  }
  materials: object
}

const PadBlender = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { nodes } = useGLTF(glbConstants.RUBIKS_CUBE.PAD_BLENDER) as GLTFResult

  return (
    <mesh
      ref={ref}
      geometry={nodes.PadBlender.geometry}
      castShadow
      receiveShadow
      {...props}
    >
      <meshStandardMaterial {...padsData.defaultValues.material} />
    </mesh>
  )
})

PadBlender.displayName = 'PadBlender'

useGLTF.preload(glbConstants.RUBIKS_CUBE.PAD_BLENDER)

export default PadBlender
