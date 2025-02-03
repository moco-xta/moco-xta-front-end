import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoCPlusPlus = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_C_PLUS_PLUS) as GLTFResult

  useLayoutEffect(() => {
    ;(Object.keys(materials) as Array<keyof typeof materials>).forEach((key) => {
      materials[key].side = THREE.DoubleSide
    })
  }, [materials])

  return (
    <group
    ref={ref} {...props} dispose={null}>
        <mesh geometry={nodes.LogoCPlusPlus_1.geometry} material={materials['logo_cplusplus_#0086d4']}
        castShadow
        receiveShadow />
        <mesh geometry={nodes.LogoCPlusPlus_2.geometry} material={materials['logo_cplusplus_#ffffff']}
        castShadow
        receiveShadow />
        <mesh geometry={nodes.LogoCPlusPlus_3.geometry} material={materials['logo_cplusplus_#0075c0']}
        castShadow
        receiveShadow />
        <mesh geometry={nodes.LogoCPlusPlus_4.geometry} material={materials['logo_cplusplus_#00549d']}
        castShadow
        receiveShadow />
    </group>
  )
})

LogoCPlusPlus.displayName = 'LogoCPlusPlus'

useGLTF.preload(glbConstants.LOGOS.LOGO_C_PLUS_PLUS)

export default LogoCPlusPlus