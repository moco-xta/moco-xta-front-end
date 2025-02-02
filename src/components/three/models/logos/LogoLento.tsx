import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoLento = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_LENTO) as GLTFResult

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
        geometry={nodes.LogoLento_1.geometry}
        material={materials['logo_lento_#5397D4']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoLento_2.geometry}
        material={materials['logo_lento_##ECBAA2']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoLento.displayName = 'LogoLento'

useGLTF.preload(glbConstants.LOGOS.LOGO_LENTO)

export default LogoLento
