import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoYarn = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_YARN) as GLTFResult

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
        geometry={nodes.LogoYarn_1.geometry}
        material={materials['logo_yarn_#ffffff']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoYarn_2.geometry}
        material={materials['logo_yarn_#358fb9']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoYarn.displayName = 'LogoYarn'

useGLTF.preload(glbConstants.LOGOS.LOGO_YARN)

export default LogoYarn
