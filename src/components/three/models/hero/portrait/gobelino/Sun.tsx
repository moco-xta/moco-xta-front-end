import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { MeshProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { sunComponentDefaultValues } from '@/data/hero/three/portrait/gobelino/sun_and_moon/sunComponentData'

export const Sun = forwardRef<THREE.Mesh, MeshProps>(function Sun(props, ref) {
  const { nodes, materials } = useGLTF(glbConstants.HERO.PORTRAIT.GOBELINO.SUN) as GLTFResult

  useLayoutEffect(() => {
    materials['gobelino_#E7CE00_material'].transparent =
      sunComponentDefaultValues.material!.transparent!
    materials['gobelino_#E7CE00_material'].opacity = sunComponentDefaultValues.material!.opacity!
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

useGLTF.preload(glbConstants.HERO.PORTRAIT.GOBELINO.SUN)
