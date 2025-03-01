import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { TLogo } from '@/types/components/three/types'
import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { whiteMaterial } from '../../materials/resources/resourcesMaterials'

const LogoFigma = forwardRef<THREE.Group, TLogo>(({ roughness, metalness, ...rest }, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_FIGMA) as GLTFResult

  /* useLayoutEffect(() => {
    ;(Object.keys(materials) as Array<keyof typeof materials>).forEach((key) => {
      // materials[key].metalness x= metalness ?? 1
      // materials[key].roughness = roughness ?? 1
      // materials[key].side = THREE.DoubleSide
    })
  }, [materials, metalness, roughness]) */

  return (
    <group
      ref={ref}
      {...rest}
      dispose={null}
    >
      <mesh
        geometry={nodes.LogoFigma_1.geometry}
        // material={materials['logo_figma_#f24d1d']}
        material={whiteMaterial}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoFigma_2.geometry}
        // material={materials['logo_figma_#ff7162']}
        material={whiteMaterial}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoFigma_3.geometry}
        // material={materials['logo_figma_#a259ff']}
        material={whiteMaterial}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoFigma_4.geometry}
        // material={materials['logo_figma_#19bcfe']}
        material={whiteMaterial}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoFigma_5.geometry}
        // material={materials['logo_figma_#0dcf82']}
        material={whiteMaterial}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoFigma.displayName = 'LogoFigma'

useGLTF.preload(glbConstants.LOGOS.LOGO_FIGMA)

export default LogoFigma
