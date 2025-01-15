import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoPostgresql = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_POSTGRESQL) as GLTFResult

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
        geometry={nodes.LogoPostgresql_1.geometry}
        material={materials['logo_postgresql_#000000']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoPostgresql_2.geometry}
        material={materials['logo_postgresql_#ffffff']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoPostgresql_3.geometry}
        material={materials['logo_postgresql_#336791']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoPostgresql.displayName = 'LogoPostgresql'

useGLTF.preload(glbConstants.LOGOS.LOGO_POSTGRESQL)

export default LogoPostgresql
