import React from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

export function IconPostgresql(props) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_POSTGRESQL)
  return (
    <group
      {...props}
      dispose={null}
      position={[1.5, 0, 0]}
    >
      <mesh
        geometry={nodes.IconPostgresql_1.geometry}
        material={materials['icon_postgresql_#000000']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.IconPostgresql_2.geometry}
        material={materials['icon_postgresql_#ffffff']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.IconPostgresql_3.geometry}
        material={materials['icon_postgresql_#336791']}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(GltfConstants.ICON_POSTGRESQL)