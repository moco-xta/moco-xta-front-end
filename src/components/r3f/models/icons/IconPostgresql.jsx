import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconPostgresql = forwardRef(function IconPostgresql(props, ref) {
  const { nodes, materials } = useGLTF(GltfConstants.ICON_POSTGRESQL)
  return (
    <group
    ref={ref}
      dispose={null}
      position={[32, 0, 0]}
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
})

useGLTF.preload(GltfConstants.ICON_POSTGRESQL)

export default IconPostgresql