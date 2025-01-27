import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoDeepseek = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_DEEPSEEK) as GLTFResult

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
        geometry={nodes.LogoDeepseek.geometry}
        material={materials['logo_deepseek_#4C6BFEFF']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoDeepseek.displayName = 'LogoDeepseek'

useGLTF.preload(glbConstants.LOGOS.LOGO_DEEPSEEK)

export default LogoDeepseek
