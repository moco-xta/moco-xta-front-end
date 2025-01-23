import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoAbwerkt = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_ABWERKT) as GLTFResult

  ;(Object.keys(materials) as Array<keyof typeof materials>).forEach((key) => {
    materials[key].side = THREE.DoubleSide
  })

  return (
    <group
      ref={ref}
      {...props}
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
