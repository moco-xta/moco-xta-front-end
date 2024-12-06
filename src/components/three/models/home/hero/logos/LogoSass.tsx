import React, { forwardRef } from 'react'
import * as THREE from 'three'
import { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoSass: THREE.Mesh
  }
  materials: {
    ['logo_sass_#ce679b']: THREE.MeshStandardMaterial
  }
}

export const LogoSass = forwardRef<THREE.Group, GroupProps>(function LogoSass(props, ref) {
  const { nodes, materials } = useGLTF(glbConstants.HOME.HERO.LOGOS.LOGO_SASS) as GLTFResult

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        name='LogoSass'
        geometry={nodes.LogoSass.geometry}
        material={materials['logo_sass_#ce679b']}
      />
    </group>
  )
})

useGLTF.preload(glbConstants.HOME.HERO.LOGOS.LOGO_SASS)
