import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const PadReactThreeDrei = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>(
  ({ children, ...rest }, ref) => {
    const { nodes } = useGLTF(glbConstants.RUBIKS_CUBE.PAD_REACT_THREE_DREI) as GLTFResult

    return (
      <mesh
        ref={ref}
        geometry={nodes.PadReactThreeDrei.geometry}
        castShadow
        receiveShadow
        {...rest}
      >
        {children}
      </mesh>
    )
  },
)

PadReactThreeDrei.displayName = 'PadReactThreeDrei'

useGLTF.preload(glbConstants.RUBIKS_CUBE.PAD_REACT_THREE_DREI)

export default PadReactThreeDrei
