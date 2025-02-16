import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const PadHostinger = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>(
  ({ children, ...rest }, ref) => {
    const { nodes } = useGLTF(glbConstants.RUBIKS_CUBE.PAD_HOSTINGER) as GLTFResult

    return (
      <mesh
        ref={ref}
        geometry={nodes.PadHostinger.geometry}
        castShadow
        receiveShadow
        {...rest}
      >
        {children}
      </mesh>
    )
  },
)

PadHostinger.displayName = 'PadHostinger'

useGLTF.preload(glbConstants.RUBIKS_CUBE.PAD_HOSTINGER)

export default PadHostinger
