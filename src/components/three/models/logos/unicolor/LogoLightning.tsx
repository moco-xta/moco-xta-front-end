import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { type GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/components/three/types'

import { fluorescentYellowMaterial } from '@/components/three/materials'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoLightning = forwardRef<THREE.Group, GroupProps>((props, ref) => {
  const { nodes } = useGLTF(glbConstants.LOGOS.UNICOLOR.LOGO_LIGHTNING) as GLTFResult

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.LogoLightning.geometry}
        material={fluorescentYellowMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
})

LogoLightning.displayName = 'LogoLightning'

useGLTF.preload(glbConstants.LOGOS.UNICOLOR.LOGO_LIGHTNING)

export default LogoLightning
