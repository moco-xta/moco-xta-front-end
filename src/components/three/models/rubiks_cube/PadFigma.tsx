import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { padsData } from '@/data/skills/rubiks_cube/three/padsData'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    PadFigma: THREE.Mesh
  }
  materials: object
}

const PadFigma = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { nodes } = useGLTF(glbConstants.RUBIKS_CUBE.PAD_FIGMA) as GLTFResult

  return (
    <mesh
      ref={ref}
      geometry={nodes.PadFigma.geometry}
      castShadow
      receiveShadow
      {...props}
    >
      <meshStandardMaterial {...padsData.defaultValues.material} />
    </mesh>
  )
})

PadFigma.displayName = 'PadFigma'

useGLTF.preload(glbConstants.RUBIKS_CUBE.PAD_FIGMA)

export default PadFigma
