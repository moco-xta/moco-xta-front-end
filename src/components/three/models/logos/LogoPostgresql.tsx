import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoPostgresql_1: THREE.Mesh
    LogoPostgresql_2: THREE.Mesh
    LogoPostgresql_3: THREE.Mesh
  }
  materials: {
    ['logo_postgresql_#000000']: THREE.MeshStandardMaterial
    ['logo_postgresql_#ffffff']: THREE.MeshStandardMaterial
    ['logo_postgresql_#336791']: THREE.MeshStandardMaterial
  }
}

const LogoPostgresql = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.RESOURCES.LOGO_POSTGRESQL) as GLTFResult

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

useGLTF.preload(glbConstants.RESOURCES.LOGO_POSTGRESQL)

export default LogoPostgresql
