import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { default as birdComponentConstants } from '@/constants/animations/home/hero/portrait/gobelino/birdComponentConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Bird_1: THREE.Mesh
    Bird_2: THREE.Mesh
  }
  materials: {
    ['gobelino_#E73700_material']: THREE.MeshStandardMaterial
    ['gobelino_#99000E_material']: THREE.MeshStandardMaterial
  }
}

export const Bird = forwardRef<THREE.Group, GroupProps>(function Bird(props, ref) {
  const { nodes, materials } = useGLTF(glbConstants.HOME.HERO.PORTRAIT.GOBELINO.BIRD) as GLTFResult

  useLayoutEffect(() => {
    Object.keys(materials).forEach((key) => {
      // @ts-ignore
      materials[key].transparent =
        birdComponentConstants.ANIMATION['0_PERCENT'].MATERIAL.TRANSPARENT
      // @ts-ignore
      materials[key].opacity = birdComponentConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY
    })
  }, [materials])

  return (
    <group
      ref={ref}
      {...props}
      name='Bird'
    >
      <mesh
        name='Bird_1'
        geometry={nodes.Bird_1.geometry}
        material={materials['gobelino_#E73700_material']}
        receiveShadow
        castShadow
      />
      <mesh
        name='Bird_2'
        geometry={nodes.Bird_2.geometry}
        material={materials['gobelino_#99000E_material']}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(glbConstants.HOME.HERO.PORTRAIT.GOBELINO.BIRD)
