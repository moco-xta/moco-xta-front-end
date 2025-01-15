import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { padsData } from '@/data/skills/rubiks_cube/three/padsData'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    PadIllustrator: THREE.Mesh
  }
  materials: object
}

const PadIllustrator = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>((props, ref) => {
  const { nodes } = useGLTF(glbConstants.RUBIKS_CUBE.PAD_ILLUSTRATOR) as GLTFResult

  return (
    <mesh
      ref={ref}
      geometry={nodes.PadIllustrator.geometry}
      castShadow
      receiveShadow
      {...props}
    >
      <meshStandardMaterial {...padsData.defaultValues.material} />
    </mesh>
  )
})

PadIllustrator.displayName = 'PadIllustrator'

useGLTF.preload(glbConstants.RUBIKS_CUBE.PAD_ILLUSTRATOR)

export default PadIllustrator
