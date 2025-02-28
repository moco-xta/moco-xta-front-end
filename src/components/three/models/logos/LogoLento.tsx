import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { TLogo } from '@/types/components/three/types'
import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoLento = forwardRef<THREE.Group, TLogo>(({ roughness, metalness, ...rest }, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_LENTO) as GLTFResult

  ;(Object.keys(materials) as Array<keyof typeof materials>).forEach((key) => {
    materials[key].roughness = roughness ?? 1
    materials[key].side = THREE.DoubleSide
  })

  return (
    <group
      ref={ref}
      {...rest}
      dispose={null}
    >
      <mesh
        geometry={nodes.LogoLento_1.geometry}
        material={materials['logo_lento_#5397D4']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoLento_2.geometry}
        material={materials['logo_lento_##ECBAA2']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoLento.displayName = 'LogoLento'

useGLTF.preload(glbConstants.LOGOS.LOGO_LENTO)

export default LogoLento
