import React from 'react'
import { useGLTF } from '@react-three/drei'

import { default as GltfConstants } from '@/constants/gltfConstants.json'

export function LogoSpringBoot({ position, scale }) {
  const { nodes, materials } = useGLTF(GltfConstants.LOGO_SPRING_BOOT)
  return (
    <group>
      <mesh
        geometry={nodes.LogoSpringBoot_1.geometry}
        material={materials['logo_spring_boot_#68bd45']}
      />
      <mesh
        geometry={nodes.LogoSpringBoot_2.geometry}
        material={materials['logo_spring_boot_#ffffff']}
      />
    </group>
  )
}

useGLTF.preload(GltfConstants.LOGO_SPRING_BOOT)
