import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const PadGithub = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>(
  ({ children, ...rest }, ref) => {
    const { nodes } = useGLTF(glbConstants.RUBIKS_CUBE.PAD_GITHUB) as GLTFResult

    return (
      <mesh
        ref={ref}
        geometry={nodes.PadGithub.geometry}
        castShadow
        receiveShadow
        {...rest}
      >
        {children}
      </mesh>
    )
  },
)

PadGithub.displayName = 'PadGithub'

useGLTF.preload(glbConstants.RUBIKS_CUBE.PAD_GITHUB)

export default PadGithub
