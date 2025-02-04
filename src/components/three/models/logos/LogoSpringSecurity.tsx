import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoSpringSecurity = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_SPRING_SECURITY) as GLTFResult

  useLayoutEffect(() => {
    ;(Object.keys(materials) as Array<keyof typeof materials>).forEach((key) => {
      materials[key].side = THREE.DoubleSide
    })
  }, [materials])

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.LogoSpringSecurity_1.geometry}
        material={materials['logo_spring_security_#74b61d']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoSpringSecurity_2.geometry}
        material={materials['logo_spring_security_#fff']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoSpringSecurity.displayName = 'LogoSpringSecurity'

useGLTF.preload(glbConstants.LOGOS.LOGO_SPRING_SECURITY)

export default LogoSpringSecurity
