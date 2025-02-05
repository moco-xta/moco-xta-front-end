import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const PadNextIntl = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>(
  ({ children, ...rest }, ref) => {
    const { nodes } = useGLTF(glbConstants.RUBIKS_CUBE.PAD_NEXT_INTL) as GLTFResult

    return (
      <mesh
        ref={ref}
        geometry={nodes.PadNextIntl.geometry}
        castShadow
        receiveShadow
        {...rest}
      >
        {children}
      </mesh>
    )
  },
)

PadNextIntl.displayName = 'PadNextIntl'

useGLTF.preload(glbConstants.RUBIKS_CUBE.PAD_NEXT_INTL)

export default PadNextIntl
