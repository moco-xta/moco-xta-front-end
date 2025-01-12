import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
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

const LogoSpring = forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF(glbConstants.LOGOS.LOGO_SPRING) as GLTFResult

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
        geometry={nodes.LogoSpring_1.geometry}
        material={materials['logo_spring_#74b61d']}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.LogoSpring_2.geometry}
        material={materials['logo_spring_#ffffff']}
        castShadow
        receiveShadow
      />
    </group>
  )
})

LogoSpring.displayName = 'LogoSpring'

useGLTF.preload(glbConstants.LOGOS.LOGO_SPRING)

export default LogoSpring
