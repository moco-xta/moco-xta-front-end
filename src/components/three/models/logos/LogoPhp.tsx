import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoPhp = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_PHP) as GLTFResult

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
        geometry={nodes.Curve.geometry}
        material={materials['logo_php_#6583B9FF']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Curve_1.geometry}
        material={materials['logo_php_#fff']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Curve_2.geometry}
        material={materials['logo_php_#000']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoPhp.displayName = 'LogoPhp'

useGLTF.preload(glbConstants.LOGOS.LOGO_PHP)

export default LogoPhp
