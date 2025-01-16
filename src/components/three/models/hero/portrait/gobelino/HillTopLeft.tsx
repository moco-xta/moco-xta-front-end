import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { hillTopLeftComponentDefaultValues } from '@/data/hero/three/portrait/gobelino/hillTopLeftComponentData'

export const HillTopLeft = forwardRef<THREE.Group, GroupProps>(function HillTopLeft(props, ref) {
  const { nodes, materials } = useGLTF(
    glbConstants.HERO.PORTRAIT.GOBELINO.HILL_TOP_LEFT,
  ) as GLTFResult

  useLayoutEffect(() => {
    ;(Object.keys(materials) as Array<keyof typeof materials>).forEach((key) => {
      materials[key].transparent = hillTopLeftComponentDefaultValues.material!.transparent!
      materials[key].opacity = hillTopLeftComponentDefaultValues.material!.opacity!
    })
  }, [materials])

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
    >
      <mesh
        name='HillTopLeft_1'
        geometry={nodes.HillTopLeft_1.geometry}
        material={materials['gobelino_#000000_material']}
      />
      <mesh
        name='HillTopLeft_2'
        geometry={nodes.HillTopLeft_2.geometry}
        material={materials['gobelino_#3D5F00_material']}
      />
      <mesh
        name='HillTopLeft_3'
        geometry={nodes.HillTopLeft_3.geometry}
        material={materials['gobelino_#005925_material']}
      />
      <mesh
        name='HillTopLeft_4'
        geometry={nodes.HillTopLeft_4.geometry}
        material={materials['gobelino_#E76E00_material']}
      />
      <mesh
        name='HillTopLeft_5'
        geometry={nodes.HillTopLeft_5.geometry}
        material={materials['gobelino_#64FF00_material']}
      />
      <mesh
        name='HillTopLeft_6'
        geometry={nodes.HillTopLeft_6.geometry}
        material={materials['gobelino_#07725F_material']}
      />
      <mesh
        name='HillTopLeft_7'
        geometry={nodes.HillTopLeft_7.geometry}
        material={materials['gobelino_#A6760E_material']}
      />
      <mesh
        name='HillTopLeft_8'
        geometry={nodes.HillTopLeft_8.geometry}
        material={materials.gobelino_tree_texture}
      />
    </group>
  )
})

useGLTF.preload(glbConstants.HERO.PORTRAIT.GOBELINO.HILL_TOP_LEFT)
