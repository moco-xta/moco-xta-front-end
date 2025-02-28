import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { TLogo } from '@/types/components/three/types'
import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoSpring = forwardRef<THREE.Group, TLogo>(({ roughness, metalness, ...rest }, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_SPRING) as GLTFResult

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
        geometry={nodes.LogoSpring_1.geometry}
        material={materials['logo_spring_#74b61d']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoSpring_2.geometry}
        material={materials['logo_spring_#ffffff']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoSpring.displayName = 'LogoSpring'

useGLTF.preload(glbConstants.LOGOS.LOGO_SPRING)

export default LogoSpring
