import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { type GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/components/three/types'

import { oilMaterial } from '@/components/three/materials'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoAuth0Unicolor = forwardRef<THREE.Group, GroupProps>((props, ref) => {
  const { nodes } = useGLTF(glbConstants.LOGOS.UNICOLOR.LOGO_AUTH0_UNICOLOR) as GLTFResult

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.LogoAuth0Unicolor.geometry}
        material={oilMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
})

LogoAuth0Unicolor.displayName = 'LogoAuth0Unicolor'

useGLTF.preload(glbConstants.LOGOS.UNICOLOR.LOGO_AUTH0_UNICOLOR)

export default LogoAuth0Unicolor
