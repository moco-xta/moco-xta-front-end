import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoTypescript_1: THREE.Mesh
    LogoTypescript_2: THREE.Mesh
  }
  materials: {
    ['icon_typescript_#2f78c7']: THREE.MeshStandardMaterial
    ['icon_typescript_#ffffff']: THREE.MeshStandardMaterial
  }
}

const LogoTypescript = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.RESOURCES.LOGO_TYPESCRIPT) as GLTFResult

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
        geometry={nodes.LogoTypescript_1.geometry}
        material={materials['icon_typescript_#2f78c7']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoTypescript_2.geometry}
        material={materials['icon_typescript_#ffffff']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

useGLTF.preload(glbConstants.RESOURCES.LOGO_TYPESCRIPT)

export default LogoTypescript
