import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { default as sprayComponentAnimationsConstants } from '@/constants/animations/home/hero/portrait/sprayComponentAnimationsConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Spray_1: THREE.Mesh
    Spray_2: THREE.Mesh
    Spray_3: THREE.Mesh
  }
  materials: {
    ['tools_#000000_material']: THREE.MeshStandardMaterial
    ['tools_#ffffff_material']: THREE.MeshStandardMaterial
    ['tools_#0000ff_material']: THREE.MeshStandardMaterial
  }
}

export const Spray = forwardRef<THREE.Group, GroupProps>(function Spray(props, ref) {
  const { nodes, materials } = useGLTF(glbConstants.HOME.HERO.PORTRAIT.SPRAY) as GLTFResult

  useLayoutEffect(() => {
    Object.keys(materials).forEach((key) => {
      // @ts-ignore
      materials[key].transparent = true
      // @ts-ignore
      materials[key].opacity =
        sprayComponentAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY
    })
  }, [materials])

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        name='Spray_1'
        geometry={nodes.Spray_1.geometry}
        material={materials['tools_#000000_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='Spray_2'
        geometry={nodes.Spray_2.geometry}
        material={materials['tools_#ffffff_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='Spray_3'
        geometry={nodes.Spray_3.geometry}
        material={materials['tools_#0000ff_material']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(glbConstants.HOME.HERO.PORTRAIT.SPRAY)
