import * as THREE from 'three'
import React, { forwardRef, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { ForwardRefGltfGroupInterface } from '@/interfaces/r3fInterfaces'

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

const LogoMysql = forwardRef<ForwardRefGltfGroupInterface, JSX.IntrinsicElements['group']>(function LogoMysql(
  { position, rotation, scale },
  ref,
) {
  const { scene, nodes, materials } = useGLTF(GltfConstants.LOGO_MYSQL) as GLTFResult

  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(scene)
    // @ts-ignore
    ref.current.width = box.getSize(new THREE.Vector3()).x
  }, [scene, ref])

  return (
    <group
      ref={ref}
      dispose={null}
      position={position}
      rotation={rotation}
      scale={scale}
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

export default LogoMysql
