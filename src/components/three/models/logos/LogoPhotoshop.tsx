import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoPhotoshop = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_PHOTOSHOP) as GLTFResult

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
        geometry={nodes.LogoPhotoshop_1.geometry}
        material={materials['icon_photoshop_#051e37']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoPhotoshop_2.geometry}
        material={materials['icon_photoshop_#39a9ff']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoPhotoshop.displayName = 'LogoPhotoshop'

useGLTF.preload(glbConstants.LOGOS.LOGO_PHOTOSHOP)

export default LogoPhotoshop
