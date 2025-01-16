import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { padsData } from '@/data/skills/rubiks_cube/three/padsData'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    PadReactThreeDrei: THREE.Mesh
  }
  materials: object
}

const PadReactThreeDrei = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { nodes } = useGLTF(glbConstants.RUBIKS_CUBE.PAD_REACT_THREE_DREI) as GLTFResult

  return (
    <mesh
      ref={ref}
      geometry={nodes.PadReactThreeDrei.geometry}
      castShadow
      receiveShadow
      {...props}
    >
      <meshStandardMaterial {...padsData.defaultValues.material} />
    </mesh>
  )
})

PadReactThreeDrei.displayName = 'PadReactThreeDrei'

useGLTF.preload(glbConstants.RUBIKS_CUBE.PAD_REACT_THREE_DREI)

export default PadReactThreeDrei
