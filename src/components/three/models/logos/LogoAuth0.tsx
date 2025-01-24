import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoAuth0 = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_AUTH0) as GLTFResult

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
