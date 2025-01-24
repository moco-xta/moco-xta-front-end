import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoAws = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_AWS) as GLTFResult

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
