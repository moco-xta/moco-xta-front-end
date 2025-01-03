import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoAngular_1: THREE.Mesh
    LogoAngular_2: THREE.Mesh
    LogoAngular_3: THREE.Mesh
  }
  materials: {
    ['logo_angular_#dd002d']: THREE.MeshStandardMaterial
    ['logo_angular_#ffffff']: THREE.MeshStandardMaterial
    ['logo_angular_#c4002b']: THREE.MeshStandardMaterial
  }
}

const LogoAngular = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.RESOURCES.LOGO_ANGULAR) as GLTFResult

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
        name='LogoAngular_1'
        geometry={nodes.LogoAngular_1.geometry}
        material={materials['logo_angular_#dd002d']}
        castShadow
        receiveShadow
      />
      <mesh
        name='LogoAngular_2'
        geometry={nodes.LogoAngular_2.geometry}
        material={materials['logo_angular_#ffffff']}
        castShadow
        receiveShadow
      />
      <mesh
        name='LogoAngular_3'
        geometry={nodes.LogoAngular_3.geometry}
        material={materials['logo_angular_#c4002b']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

useGLTF.preload(glbConstants.RESOURCES.LOGO_ANGULAR)

export default LogoAngular
