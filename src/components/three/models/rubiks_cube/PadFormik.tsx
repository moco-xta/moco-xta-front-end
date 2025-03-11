import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const PadFormik = forwardRef<THREE.Mesh, JSX.IntrinsicElements['mesh']>(
  ({ children, ...rest }, ref) => {
    const { nodes } = useGLTF(glbConstants.RUBIKS_CUBE.PAD_FORMIK) as GLTFResult

    return (
      <mesh
        ref={ref}
        geometry={nodes.PadFormik.geometry}
        castShadow
        receiveShadow
        {...rest}
      >
        {children}
      </mesh>
    )
  },
)

PadFormik.displayName = 'PadFormik'

useGLTF.preload(glbConstants.RUBIKS_CUBE.PAD_FORMIK)

export default PadFormik
