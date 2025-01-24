import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoSubstancePainter = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>(
  (props, ref) => {
    const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_SUBSTANCE_PAINTER) as GLTFResult

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
          geometry={nodes.LogoSubstancePainter.geometry}
          material={materials.logo_substance_painter}
          castShadow
          receiveShadow
        />
      </group>
    )
  },
)

LogoSubstancePainter.displayName = 'LogoSubstancePainter'

useGLTF.preload(glbConstants.LOGOS.LOGO_SUBSTANCE_PAINTER)

export default LogoSubstancePainter
