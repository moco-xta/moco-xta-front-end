import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

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

export const LogoMysql = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoMysql({}, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.LOGO_MYSQL) as GLTFResult
  return (
    <group
      ref={ref}
      dispose={null}
      position={[21, 3, 0]}
    >
      <mesh
        geometry={nodes.LogoMysql_1.geometry}
        material={materials['logo_mysql_#147993']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoMysql_2.geometry}
        material={materials['logo_mysql_#f3941f']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_MYSQL)
