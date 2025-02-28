import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { TLogo } from '@/types/components/three/types'
import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoHundredHands = forwardRef<THREE.Group, TLogo>(
  ({ roughness, metalness, ...rest }, ref) => {
    const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_HUNDRED_HANDS) as GLTFResult

    ;(Object.keys(materials) as Array<keyof typeof materials>).forEach((key) => {
      materials[key].roughness = roughness ?? 1
      materials[key].side = THREE.DoubleSide
    })

    return (
      <group
        ref={ref}
        {...rest}
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
  },
)

LogoHundredHands.displayName = 'LogoHundredHands'

useGLTF.preload(glbConstants.LOGOS.LOGO_HUNDRED_HANDS)

export default LogoHundredHands
