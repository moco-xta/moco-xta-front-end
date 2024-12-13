import React, { forwardRef, useEffect, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { default as skyComponentAnimationsConstants } from '@/constants/animations/home/hero/portrait/gobelino/skyComponentAnimationsConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Sky: THREE.Mesh
  }
  materials: {
    sky_material: THREE.MeshStandardMaterial
  }
}

export const Sky = forwardRef<THREE.Mesh, MeshProps>(function Sky(props, ref) {
  const { nodes, materials } = useGLTF(glbConstants.HOME.HERO.PORTRAIT.GOBELINO.SKY) as GLTFResult

  useLayoutEffect(() => {
    materials.sky_material.transparent =
      skyComponentAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.TRANSPARENT
    materials.sky_material.opacity =
      skyComponentAnimationsConstants.ANIMATION['0_PERCENT'].MATERIAL.OPACITY
  }, [materials])

  return (
    <mesh
      ref={ref}
      dispose={null}
      name='Sky'
      geometry={nodes.Sky.geometry}
      material={materials.sky_material}
      {...props}
    />
  )
})

useGLTF.preload(glbConstants.HOME.HERO.PORTRAIT.GOBELINO.SKY)
