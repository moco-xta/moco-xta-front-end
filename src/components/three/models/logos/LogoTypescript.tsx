import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoTypescript = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_TYPESCRIPT) as GLTFResult

  useLayoutEffect(() => {
    ;(Object.keys(materials) as Array<keyof typeof materials>).forEach((key) => {
      materials[key].side = THREE.DoubleSide
    })
  }, [materials])

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.LogoTypescript_1.geometry}
        material={materials['icon_typescript_#2f78c7']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoTypescript_2.geometry}
        material={materials['icon_typescript_#ffffff']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoTypescript.displayName = 'LogoTypescript'

useGLTF.preload(glbConstants.LOGOS.LOGO_TYPESCRIPT)

export default LogoTypescript
