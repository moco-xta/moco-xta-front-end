import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoMysql_1: THREE.Mesh
    LogoMysql_2: THREE.Mesh
  }
  materials: {
    ['logo_mysql_#147993']: THREE.MeshStandardMaterial
    ['logo_mysql_#f3941f']: THREE.MeshStandardMaterial
  }
}

const LogoMysql = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.RESOURCES.LOGO_MYSQL) as GLTFResult

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

useGLTF.preload(glbConstants.RESOURCES.LOGO_MYSQL)

export default LogoMysql
