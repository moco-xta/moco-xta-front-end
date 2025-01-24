import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

const LogoGoogleMaps = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_GOOGLE_MAPS) as GLTFResult

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
        geometry={nodes.LogoGoogleMaps_1.geometry}
        material={materials['logo_google_maps_#1b72e8']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoGoogleMaps_2.geometry}
        material={materials['logo_google_maps_#ea4335']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoGoogleMaps_3.geometry}
        material={materials['logo_google_maps_#fabc05']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoGoogleMaps_4.geometry}
        material={materials['logo_google_maps_#4284f3']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoGoogleMaps_5.geometry}
        material={materials['logo_google_maps_#33a852']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoGoogleMaps.displayName = 'LogoGoogleMaps'

useGLTF.preload(glbConstants.LOGOS.LOGO_GOOGLE_MAPS)

export default LogoGoogleMaps
