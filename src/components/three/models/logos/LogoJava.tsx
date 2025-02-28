import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { TLogo } from '@/types/components/three/types'
import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoJava = forwardRef<THREE.Group, TLogo>(({ roughness, metalness, ...rest }, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_JAVA) as GLTFResult

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
        geometry={nodes.LogoJava_1.geometry}
        material={materials['logo_java_#5382a1']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoJava_2.geometry}
        material={materials['logo_java_#e76f01']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoJava.displayName = 'LogoJava'

useGLTF.preload(glbConstants.LOGOS.LOGO_JAVA)

export default LogoJava
