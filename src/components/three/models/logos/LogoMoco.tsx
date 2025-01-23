import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoMoco = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes } = useGLTF(glbConstants.LOGOS.LOGO_MOCO) as GLTFResult

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.LogoMoco.geometry}
        receiveShadow
        castShadow
      >
        <meshNormalMaterial
          attach='material'
          side={THREE.DoubleSide}
          transparent
        />
      </mesh>
    </group>
  )
})

LogoMoco.displayName = 'LogoMoco'

useGLTF.preload(glbConstants.LOGOS.LOGO_MOCO)

export default LogoMoco
