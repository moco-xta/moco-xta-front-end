import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { TLogo } from '@/types/components/three/types'
import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoPhotoshop = forwardRef<THREE.Group, TLogo>(({ roughness, metalness, ...rest }, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_PHOTOSHOP) as GLTFResult

  useLayoutEffect(() => {
    ;(Object.keys(materials) as Array<keyof typeof materials>).forEach((key) => {
      materials[key].metalness = metalness ?? 1
      materials[key].roughness = roughness ?? 1
      materials[key].side = THREE.DoubleSide
    })
  }, [materials, metalness, roughness])

  return (
    <group
      ref={ref}
      {...rest}
      dispose={null}
    >
      <mesh
        geometry={nodes.LogoPhotoshop_1.geometry}
        material={materials['icon_photoshop_#051e37']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoPhotoshop_2.geometry}
        material={materials['icon_photoshop_#39a9ff']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoPhotoshop.displayName = 'LogoPhotoshop'

useGLTF.preload(glbConstants.LOGOS.LOGO_PHOTOSHOP)

export default LogoPhotoshop
