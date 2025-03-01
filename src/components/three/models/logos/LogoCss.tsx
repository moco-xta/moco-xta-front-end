import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { TLogo } from '@/types/components/three/types'
import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoCss = forwardRef<THREE.Group, TLogo>(({ roughness, metalness, ...rest }, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_CSS) as GLTFResult

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
        geometry={nodes.LogoCss_1.geometry}
        material={materials['logo_css_#ebebeb']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoCss_2.geometry}
        material={materials['logo_css_#3769b2']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoCss_3.geometry}
        material={materials['logo_css_#499fd8']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoCss_4.geometry}
        material={materials['logo_css_#ffffff']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoCss.displayName = 'LogoCss'

useGLTF.preload(glbConstants.LOGOS.LOGO_CSS)

export default LogoCss
