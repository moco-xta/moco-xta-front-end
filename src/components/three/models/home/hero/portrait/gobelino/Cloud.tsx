import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { default as cloudComponentConstants } from '@/constants/animations/home/hero/portrait/gobelino/cloudComponentConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Cloud: THREE.Mesh
  }
  materials: {
    ['gobelino_#ffffff_material']: THREE.MeshStandardMaterial
  }
}

export const Cloud = forwardRef<THREE.Mesh, MeshProps>(function Cloud(props, ref) {
  const { nodes, materials } = useGLTF(glbConstants.HOME.HERO.PORTRAIT.GOBELINO.CLOUD) as GLTFResult

  useLayoutEffect(() => {
    materials['gobelino_#ffffff_material'].transparent =
      cloudComponentConstants.ANIMATION['0_PERCENT'].MATERIAL.TRANSPARENT
    materials['gobelino_#ffffff_material'].opacity =
      cloudComponentConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY
    // materials['gobelino_#E7CE00_material'].side = THREE.DoubleSide
  }, [materials])

  return (
    <mesh
      ref={ref}
      name='Sun'
      geometry={nodes.Cloud.geometry}
      material={materials['gobelino_#ffffff_material']}
      receiveShadow
      castShadow
      {...props}
    />
  )
})

useGLTF.preload(glbConstants.HOME.HERO.PORTRAIT.GOBELINO.CLOUD)
