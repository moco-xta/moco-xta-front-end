import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoNextjs = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_NEXTJS) as GLTFResult

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
        geometry={nodes.LogoNextjs_1.geometry}
        material={materials['logo_nextjs_simple_#000000']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoNextjs_2.geometry}
        material={materials['logo_nextjs_simple_#ffffff']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoNextjs.displayName = 'LogoNextjs'

LogoNextjs.displayName = 'LogoNextjs'

useGLTF.preload(glbConstants.LOGOS.LOGO_NEXTJS)

export default LogoNextjs
