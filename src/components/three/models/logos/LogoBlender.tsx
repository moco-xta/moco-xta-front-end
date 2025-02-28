import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { TLogo } from '@/types/components/three/types'
import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoBlender = forwardRef<THREE.Group, TLogo>(({ roughness, metalness, ...rest }, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_BLENDER) as GLTFResult

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
        name='LogoBlender_1'
        geometry={nodes.LogoBlender_1.geometry}
        material={materials['icon_blender_#265787']}
        castShadow
        receiveShadow
      />
      <mesh
        name='LogoBlender_2'
        geometry={nodes.LogoBlender_2.geometry}
        material={materials['icon_blender_#ea7600']}
        castShadow
        receiveShadow
      />
      <mesh
        name='LogoBlender_3'
        geometry={nodes.LogoBlender_3.geometry}
        material={materials['icon_blender_#ffffff']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoBlender.displayName = 'LogoBlender'

useGLTF.preload(glbConstants.LOGOS.LOGO_BLENDER)

export default LogoBlender
