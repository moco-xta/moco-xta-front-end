import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { default as sunComponentConstants } from '@/constants/animations/home/hero/portrait/gobelino/sunComponentConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Sun: THREE.Mesh
  }
  materials: {
    ['gobelino_#E7CE00_material']: THREE.MeshStandardMaterial
  }
}

export const Sun = forwardRef<THREE.Mesh, MeshProps>(function Sun(props, ref) {
  const { nodes, materials } = useGLTF(glbConstants.HOME.HERO.PORTRAIT.GOBELINO.SUN) as GLTFResult

  useLayoutEffect(() => {
    materials['gobelino_#E7CE00_material'].transparent =
      sunComponentConstants.ANIMATION['0_PERCENT'].MATERIAL.TRANSPARENT
    materials['gobelino_#E7CE00_material'].opacity =
      sunComponentConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY
    // materials['gobelino_#E7CE00_material'].side = THREE.DoubleSide
  }, [materials])

  return (
    <mesh
      ref={ref}
      name='Sun'
      geometry={nodes.Sun.geometry}
      material={materials['gobelino_#E7CE00_material']}
      {...props}
    />
  )
})

useGLTF.preload(glbConstants.HOME.HERO.PORTRAIT.GOBELINO.SUN)
