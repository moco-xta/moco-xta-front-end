import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { TLogo } from '@/types/components/three/types'
import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoAuth0 = forwardRef<THREE.Group, TLogo>(({ roughness, metalness, ...rest }, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_AUTH0) as GLTFResult

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
        geometry={nodes.LogoAuth0_1.geometry}
        material={materials['logo_auth0_#EB5424FF']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoAuth0_2.geometry}
        material={materials['logo_auth0_#fff']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoAuth0.displayName = 'LogoAuth0'

useGLTF.preload(glbConstants.LOGOS.LOGO_AUTH0)

export default LogoAuth0
