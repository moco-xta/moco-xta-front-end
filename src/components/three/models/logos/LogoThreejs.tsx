import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { TLogo } from '@/types/components/three/types'
import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoThreejs = forwardRef<THREE.Group, TLogo>(({ roughness, metalness, ...rest }, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_THREEJS) as GLTFResult

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
        geometry={nodes.LogoThreejs_1.geometry}
        material={materials['icon_threejs_#ffffff']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoThreejs_2.geometry}
        material={materials['icon_threejs_#000000']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoThreejs.displayName = 'LogoThreejs'

useGLTF.preload(glbConstants.LOGOS.LOGO_THREEJS)

export default LogoThreejs
