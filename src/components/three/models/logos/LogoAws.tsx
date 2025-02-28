import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { TLogo } from '@/types/components/three/types'
import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoAws = forwardRef<THREE.Group, TLogo>(({ roughness, metalness, ...rest }, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_AWS) as GLTFResult

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
        name='LogoAws_1'
        geometry={nodes.LogoAws_1.geometry}
        material={materials['logo_aws_#fff']}
        castShadow
        receiveShadow
      />
      <mesh
        name='LogoAws_2'
        geometry={nodes.LogoAws_2.geometry}
        material={materials['logo_aws_#ff9900']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoAws.displayName = 'LogoAws'

useGLTF.preload(glbConstants.LOGOS.LOGO_AWS)

export default LogoAws
