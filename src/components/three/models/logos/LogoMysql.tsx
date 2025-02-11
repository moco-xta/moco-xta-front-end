import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoMysql = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_MYSQL) as GLTFResult

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
        geometry={nodes.LogoMysql_1.geometry}
        material={materials['logo_mysql_#147993']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoMysql_2.geometry}
        material={materials['logo_mysql_#f3941f']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoMysql.displayName = 'LogoMysql'

useGLTF.preload(glbConstants.LOGOS.LOGO_MYSQL)

export default LogoMysql
