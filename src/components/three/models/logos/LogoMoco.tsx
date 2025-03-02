import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult, TLogoMoco } from '@/types/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoMoco = forwardRef<THREE.Group, TLogoMoco>(({ material, ...rest }, ref) => {
  const { nodes } = useGLTF(glbConstants.LOGOS.LOGO_MOCO) as GLTFResult

  return (
    <group
      ref={ref}
      {...rest}
      dispose={null}
    >
      <mesh
        geometry={nodes.LogoMoco.geometry}
        material={material}
        receiveShadow
        castShadow
      ></mesh>
    </group>
  )
})

LogoMoco.displayName = 'LogoMoco'

useGLTF.preload(glbConstants.LOGOS.LOGO_MOCO)

export default LogoMoco
