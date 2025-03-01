import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { TLogo } from '@/types/components/three/types'
import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

import { getSkinMaterial } from '../../materials/resources/resourcesMaterials'

const LogoAngular = forwardRef<THREE.Group, TLogo>(({ roughness, metalness, ...rest }, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_ANGULAR) as GLTFResult

  ;(Object.keys(materials) as Array<keyof typeof materials>).forEach((key) => {
    // materials[key].roughness = roughness ?? 1
    // materials[key].side = THREE.DoubleSide
  })

  return (
    <group
      ref={ref}
      {...rest}
      dispose={null}
    >
      <mesh
        name='LogoAngular_1'
        geometry={nodes.LogoAngular_1.geometry}
        // material={materials['logo_angular_#dd002d']}
        material={getSkinMaterial('#0000FF')}
        castShadow
        receiveShadow
      />
      <mesh
        name='LogoAngular_2'
        geometry={nodes.LogoAngular_2.geometry}
        // material={materials['logo_angular_#ffffff']}
        material={getSkinMaterial('#0000FF')}
        castShadow
        receiveShadow
      />
      <mesh
        name='LogoAngular_3'
        geometry={nodes.LogoAngular_3.geometry}
        // material={materials['logo_angular_#c4002b']}
        material={getSkinMaterial('#0000FF')}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoAngular.displayName = 'LogoAngular'

useGLTF.preload(glbConstants.LOGOS.LOGO_ANGULAR)

export default LogoAngular
