import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export const LogoAthleticoNacional = forwardRef<THREE.Mesh, MeshProps>(
  function LogoAthleticoNacional(props, ref) {
    const { nodes, materials } = useGLTF(glbConstants.CONTACT.LOGO_ATHLETICO_NACIONAL) as GLTFResult

    useLayoutEffect(() => {
      ;(Object.keys(materials) as Array<keyof typeof materials>).forEach((key) => {
        materials[key].transparent = true
        materials[key].opacity = 1
      })
    }, [materials])

    return (
      <mesh
        ref={ref}
        name='LogoAthleticoNacional'
        geometry={nodes.LogoAthleticoNacional.geometry}
        material={materials.logo_athletico_nacional_material}
        receiveShadow
        castShadow
        {...props}
      />
    )
  },
)

useGLTF.preload(glbConstants.CONTACT.LOGO_ATHLETICO_NACIONAL)
