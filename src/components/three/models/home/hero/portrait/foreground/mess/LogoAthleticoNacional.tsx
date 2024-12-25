import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { default as logoAthleticoNacionalComponentConstants } from '@/constants/home/hero/three/portrait/foreground/mess/logoAthleticoNacionalComponentConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoAthleticoNacional: THREE.Mesh
  }
  materials: {
    logo_athletico_nacional_material: THREE.MeshStandardMaterial
  }
}

export const LogoAthleticoNacional = forwardRef<THREE.Mesh, MeshProps>(
  function LogoAthleticoNacional(props, ref) {
    const { nodes, materials } = useGLTF(
      glbConstants.HOME.HERO.PORTRAIT.FOREGROUND.MESS.LOGO_ATHLETICO_NACIONAL,
    ) as GLTFResult

    useLayoutEffect(() => {
      ;(Object.keys(materials) as Array<keyof typeof materials>).forEach((key) => {
        materials[key].transparent =
          logoAthleticoNacionalComponentConstants.defaultValues.material.transparent
        materials[key].opacity =
          logoAthleticoNacionalComponentConstants.defaultValues.material.opacity
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

useGLTF.preload(glbConstants.HOME.HERO.PORTRAIT.FOREGROUND.MESS.LOGO_ATHLETICO_NACIONAL)
