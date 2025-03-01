import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { TLogo } from '@/types/components/three/types'
import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoYarn = forwardRef<THREE.Group, TLogo>(({ roughness, metalness, ...rest }, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_YARN) as GLTFResult

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
        geometry={nodes.LogoYarn_1.geometry}
        material={materials['logo_yarn_#ffffff']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoYarn_2.geometry}
        material={materials['logo_yarn_#358fb9']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoYarn.displayName = 'LogoYarn'

useGLTF.preload(glbConstants.LOGOS.LOGO_YARN)

export default LogoYarn
