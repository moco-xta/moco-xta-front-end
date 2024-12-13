import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { default as logoAthleticoNacionalComponentAnimationsConstants } from '@/constants/animations/home/hero/portrait/foreground/mess/logoAthleticoNacionalComponentAnimationsConstants.json'

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
      materials.logo_athletico_nacional_material.transparent =
        logoAthleticoNacionalComponentAnimationsConstants.ANIMATION[
          '0_PERCENT'
        ].MATERIAL.TRANSPARENT
      materials.logo_athletico_nacional_material.opacity =
        logoAthleticoNacionalComponentAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY
    }, [materials])

    return (
      <mesh
        ref={ref}
        dispose={null}
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
