import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoReact = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_REACT) as GLTFResult

  ;(Object.keys(materials) as Array<keyof typeof materials>).forEach((key) => {
    materials[key].side = THREE.DoubleSide
  })

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.LogoReact.geometry}
        material={materials['logo_react_#61d9fb']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoReact.displayName = 'LogoReact'

LogoReact.displayName = 'LogoReact'

useGLTF.preload(glbConstants.LOGOS.LOGO_REACT)

export default LogoReact
