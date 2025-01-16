import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoAngular = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_ANGULAR) as GLTFResult

  ;(Object.keys(materials) as Array<keyof typeof materials>).forEach((key) => {
    materials[key].side = THREE.DoubleSide
  })

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

LogoAngular.displayName = 'LogoAngular'

useGLTF.preload(glbConstants.LOGOS.LOGO_ANGULAR)

export default LogoAngular
