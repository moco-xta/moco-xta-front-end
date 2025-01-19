import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoThreejs = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_THREEJS) as GLTFResult

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
