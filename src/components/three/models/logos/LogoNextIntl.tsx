import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoNextIntl = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_NEXT_INTL) as GLTFResult

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
        geometry={nodes.LogoNextIntl.geometry}
        material={materials['logo_next_intl_#5fc3e7']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoNextIntl.displayName = 'LogoNextIntl'

useGLTF.preload(glbConstants.LOGOS.LOGO_NEXT_INTL)

export default LogoNextIntl
