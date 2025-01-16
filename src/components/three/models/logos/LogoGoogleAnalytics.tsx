import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoGoogleAnalytics = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>(
  (props, ref) => {
    const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_GOOGLE_ANALYTICS) as GLTFResult

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
          geometry={nodes.LogoGoogleAnalytics_1.geometry}
          material={materials['logo_google_analytics_#f9aa00']}
          castShadow
          receiveShadow
        />
        <mesh
          geometry={nodes.LogoGoogleAnalytics_2.geometry}
          material={materials['logo_google_analytics_#e37401']}
          castShadow
          receiveShadow
        />
      </group>
    )
  },
)

LogoGoogleAnalytics.displayName = 'LogoGoogleAnalytics'

useGLTF.preload(glbConstants.LOGOS.LOGO_GOOGLE_ANALYTICS)

export default LogoGoogleAnalytics
