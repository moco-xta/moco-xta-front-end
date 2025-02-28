import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { TLogo } from '@/types/components/three/types'
import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoWebgpu = forwardRef<THREE.Group, TLogo>(({ roughness, metalness, ...rest }, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_WEBGPU) as GLTFResult

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
        geometry={nodes.LogoWebgpu_1.geometry}
        material={materials['logo_webgpu_#025796']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoWebgpu_2.geometry}
        material={materials['logo_webgpu_#0162AB']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoWebgpu_3.geometry}
        material={materials['logo_webgpu_#0072C6']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoWebgpu_4.geometry}
        material={materials['logo_webgpu_#0082E1']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoWebgpu_5.geometry}
        material={materials['logo_webgpu_#008EF6']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoWebgpu.displayName = 'LogoWebgpu'

useGLTF.preload(glbConstants.LOGOS.LOGO_WEBGPU)

export default LogoWebgpu
