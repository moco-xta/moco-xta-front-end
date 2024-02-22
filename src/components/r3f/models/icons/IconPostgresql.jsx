import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

const IconPostgresql = forwardRef(function IconPostgresql(props, ref) {
  const gltf = useGLTF(GltfConstants.ICON_POSTGRESQL)
  
  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(gltf.scene)
    ref.current.width = box.getSize(new THREE.Vector3()).x
  }, [])

  return (
    <group
      name={'icon_postgresql'}
      ref={ref}
      dispose={null}
    >
      <mesh
        geometry={gltf.nodes.IconPostgresql_1.geometry}
        material={gltf.materials['icon_postgresql_#000000']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={gltf.nodes.IconPostgresql_2.geometry}
        material={gltf.materials['icon_postgresql_#ffffff']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={gltf.nodes.IconPostgresql_3.geometry}
        material={gltf.materials['icon_postgresql_#336791']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(GltfConstants.ICON_POSTGRESQL)

export default IconPostgresql
