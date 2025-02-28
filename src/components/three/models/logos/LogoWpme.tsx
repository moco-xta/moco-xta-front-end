import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { TLogo } from '@/types/components/three/types'
import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoWpme = forwardRef<THREE.Group, TLogo>(({ roughness, metalness, ...rest }, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_WPME) as GLTFResult

  ;(Object.keys(materials) as Array<keyof typeof materials>).forEach((key) => {
    materials[key].roughness = roughness ?? 1
    materials[key].side = THREE.DoubleSide
  })

  return (
    <group
      ref={ref}
      {...rest}
      dispose={null}
    >
      <mesh
        geometry={nodes.LogoWpme_1.geometry}
        material={materials['logo_wpme_#fff']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoWpme_2.geometry}
        material={materials['logo_wpme_#f22830']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoWpme.displayName = 'LogoWpme'

useGLTF.preload(glbConstants.LOGOS.LOGO_WPME)

export default LogoWpme
