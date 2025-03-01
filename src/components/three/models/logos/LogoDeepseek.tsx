import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'

import type { TLogo } from '@/types/components/three/types'
import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

import { getGlossyMaterial } from '../../materials/resources/resourcesMaterials'

const LogoDeepseek = forwardRef<THREE.Group, TLogo>(({ roughness, metalness, ...rest }, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_DEEPSEEK) as GLTFResult

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
        geometry={nodes.LogoDeepseek.geometry}
        // material={materials['logo_deepseek_#4C6BFEFF']}
        material={getGlossyMaterial('#ffffff')}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoDeepseek.displayName = 'LogoDeepseek'

useGLTF.preload(glbConstants.LOGOS.LOGO_DEEPSEEK)

export default LogoDeepseek
