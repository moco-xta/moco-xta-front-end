import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { TLogo } from '@/types/components/three/types'
import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoCopilot = forwardRef<THREE.Group, TLogo>(({ roughness, metalness, ...rest }, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_COPILOT) as GLTFResult

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
        geometry={nodes.LogoCopilot_1.geometry}
        material={materials['logo_copilot_#000']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoCopilot_2.geometry}
        material={materials['logo_copilot_#fff']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoCopilot.displayName = 'LogoCopilot'

useGLTF.preload(glbConstants.LOGOS.LOGO_COPILOT)

export default LogoCopilot
