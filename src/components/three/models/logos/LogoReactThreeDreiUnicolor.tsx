import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { TLogo } from '@/types/components/three/types'
import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { fluorescentYellowMaterial } from '../../materials/resources/resourcesMaterials'

const LogoReactThreeDreiUnicolor = forwardRef<THREE.Group, TLogo>(
  ({ roughness, metalness, ...rest }, ref) => {
    const { nodes, materials } = useGLTF(
      glbConstants.LOGOS.LOGO_REACT_THREE_DREI_UNICOLOR,
    ) as GLTFResult

    useLayoutEffect(() => {
      ;(Object.keys(materials) as Array<keyof typeof materials>).forEach((key) => {
        materials[key].metalness = metalness ?? 1
        materials[key].roughness = roughness ?? 1
        materials[key].side = THREE.DoubleSide
      })
    }, [materials, metalness, roughness])

    return (
      <group
        ref={ref}
        {...rest}
        dispose={null}
      >
        <mesh
          geometry={nodes.LogoReactThreeDrei.geometry}
          material={fluorescentYellowMaterial}
          receiveShadow
          castShadow
        />
      </group>
    )
  },
)

LogoReactThreeDreiUnicolor.displayName = 'LogoReactThreeDreiUnicolor'

useGLTF.preload(glbConstants.LOGOS.LOGO_REACT_THREE_DREI_UNICOLOR)

export default LogoReactThreeDreiUnicolor
