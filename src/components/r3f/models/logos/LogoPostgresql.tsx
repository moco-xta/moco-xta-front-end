import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

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

export const LogoPostgresql = forwardRef<
  THREE.Group<THREE.Object3DEventMap>,
  JSX.IntrinsicElements['group']
>(function LogoPostgresql({}, ref) {
  const { nodes, materials } = useGLTF(
    GltfConstants.LOGO_POSTGRESQL,
  ) as GLTFResult
  return (
    <group
      ref={ref}
      dispose={null}
      position={[-3, 3, 0]}
    >
      <mesh
        geometry={nodes.LogoPostgresql_1.geometry}
        material={materials['logo_postgresql_#000000']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoPostgresql_2.geometry}
        material={materials['logo_postgresql_#ffffff']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoPostgresql_3.geometry}
        material={materials['logo_postgresql_#336791']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.LOGO_POSTGRESQL)
