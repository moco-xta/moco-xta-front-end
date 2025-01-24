import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoWpme = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_WPME) as GLTFResult

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
