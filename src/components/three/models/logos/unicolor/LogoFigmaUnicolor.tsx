import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { type GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/components/three/types'

import { getGlossyMaterial } from '@/components/three/materials'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

import styles from '@/styles/variables.module.scss'

const LogoFigmaUnicolor = forwardRef<THREE.Group, GroupProps>((props, ref) => {
  const { nodes } = useGLTF(glbConstants.LOGOS.UNICOLOR.LOGO_FIGMA_UNICOLOR) as GLTFResult

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.LogoFigmaUnicolor.geometry}
        material={getGlossyMaterial(styles.white)}
        receiveShadow
        castShadow
      />
    </group>
  )
})

LogoFigmaUnicolor.displayName = 'LogoFigmaUnicolor'

useGLTF.preload(glbConstants.LOGOS.UNICOLOR.LOGO_FIGMA_UNICOLOR)

export default LogoFigmaUnicolor
