import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { TLogo } from '@/types/components/three/types'
import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoAbwerkt = forwardRef<THREE.Group, TLogo>(({ roughness, metalness, ...rest }, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_ABWERKT) as GLTFResult

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
        geometry={nodes.LogoABWerkt001_1.geometry}
        material={materials['logo_abwerkt_#e32017']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoABWerkt001_2.geometry}
        material={materials['logo_abwerkt_#b0c500']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoABWerkt001_3.geometry}
        material={materials['logo_abwerkt_#036361']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoAbwerkt.displayName = 'LogoAbwerkt'

useGLTF.preload(glbConstants.LOGOS.LOGO_ABWERKT)

export default LogoAbwerkt
