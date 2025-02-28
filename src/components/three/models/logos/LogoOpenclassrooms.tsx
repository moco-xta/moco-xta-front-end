import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { TLogo } from '@/types/components/three/types'
import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoOpenclassrooms = forwardRef<THREE.Group, TLogo>(
  ({ roughness, metalness, ...rest }, ref) => {
    const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_OPENCLASSROOMS) as GLTFResult

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
          geometry={nodes.LogoOpenclassrooms.geometry}
          material={materials['logo_openclassrooms_#7450ea']}
          castShadow
          receiveShadow
        />
      </group>
    )
  },
)

LogoOpenclassrooms.displayName = 'LogoOpenclassrooms'

useGLTF.preload(glbConstants.LOGOS.LOGO_OPENCLASSROOMS)

export default LogoOpenclassrooms
