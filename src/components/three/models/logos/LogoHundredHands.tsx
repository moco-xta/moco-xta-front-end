import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoHundredHands = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_HUNDRED_HANDS) as GLTFResult

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
        geometry={nodes.LogoHundredHands.geometry}
        material={materials['logo_hundred_hands_#fff']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoHundredHands.displayName = 'LogoHundredHands'

useGLTF.preload(glbConstants.LOGOS.LOGO_HUNDRED_HANDS)

export default LogoHundredHands
