import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const PadTypescript = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>(
  ({ children, ...rest }, ref) => {
    const { nodes } = useGLTF(glbConstants.RUBIKS_CUBE.PAD_TYPESCRIPT) as GLTFResult

    return (
      <mesh
        ref={ref}
        geometry={nodes.PadTypescript.geometry}
        castShadow
        receiveShadow
        {...rest}
      >
        {children}
      </mesh>
    )
  },
)

PadTypescript.displayName = 'PadTypescript'

useGLTF.preload(glbConstants.RUBIKS_CUBE.PAD_TYPESCRIPT)

export default PadTypescript
