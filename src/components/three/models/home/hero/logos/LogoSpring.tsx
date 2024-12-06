import * as THREE from 'three'
import React, { forwardRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    LogoSpring_1: THREE.Mesh
    LogoSpring_2: THREE.Mesh
  }
  materials: {
    ['logo_spring_#74b61d']: THREE.MeshStandardMaterial
    ['logo_spring_#ffffff']: THREE.MeshStandardMaterial
  }
}

const LogoSpring = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>(function LogoSpring(
  { position, rotation, scale },
  ref,
) {
  const { nodes, materials } = useGLTF(glbConstants.HOME.HERO.LOGOS.LOGO_SPRING) as GLTFResult

  return (
    <group
      ref={ref}
      dispose={null}
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <mesh
        geometry={nodes.LogoSpring_1.geometry}
        material={materials['logo_spring_#74b61d']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.LogoSpring_2.geometry}
        material={materials['logo_spring_#ffffff']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(glbConstants.HOME.HERO.LOGOS.LOGO_SPRING)

export default LogoSpring
