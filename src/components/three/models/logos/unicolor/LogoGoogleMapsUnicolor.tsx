import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { type GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/components/three/types'

import { getGlossyMaterial } from '@/components/three/materials'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

import styles from '@/styles/variables.module.scss'

const LogoGoogleMapsUnicolor = forwardRef<THREE.Group, GroupProps>((props, ref) => {
  const { nodes } = useGLTF(glbConstants.LOGOS.UNICOLOR.LOGO_GOOGLE_MAPS_UNICOLOR) as GLTFResult

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.LogoGoogleMapsUnicolor.geometry}
        material={getGlossyMaterial(styles.blueJeans)}
        receiveShadow
        castShadow
      />
    </group>
  )
})

LogoGoogleMapsUnicolor.displayName = 'LogoGoogleMapsUnicolor'

useGLTF.preload(glbConstants.LOGOS.UNICOLOR.LOGO_GOOGLE_MAPS_UNICOLOR)

export default LogoGoogleMapsUnicolor
