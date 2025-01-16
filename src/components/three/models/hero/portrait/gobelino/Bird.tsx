import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { getBirdComponentDefaultValues } from '@/data/hero/three/portrait/gobelino/birdComponentData'

export const Bird = forwardRef<THREE.Group, GroupProps>(function Bird(props, ref) {
  const { nodes, materials } = useGLTF(glbConstants.HERO.PORTRAIT.GOBELINO.BIRD) as GLTFResult

  useLayoutEffect(() => {
    ;(Object.keys(materials) as Array<keyof typeof materials>).forEach((key) => {
      materials[key].transparent = getBirdComponentDefaultValues.material!.transparent!
      materials[key].opacity = getBirdComponentDefaultValues.material!.opacity!
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

useGLTF.preload(glbConstants.HERO.PORTRAIT.GOBELINO.BIRD)
