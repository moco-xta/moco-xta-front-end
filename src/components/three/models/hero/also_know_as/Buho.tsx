import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { buhosDefaultValues } from '@/data/hero/three/also_know_as/buhosData'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export const Buho = forwardRef<THREE.Group, GroupProps & { index: number }>(function Buho(
  { index, ...rest },
  ref,
) {
  const { nodes, materials } = useGLTF(glbConstants.HERO.ALSO_KNOW_AS.BUHO) as GLTFResult

  useLayoutEffect(() => {
    ;(Object.keys(materials) as (keyof typeof materials)[]).forEach((key) => {
      materials[key].transparent = buhosDefaultValues[index].material!.transparent!
      materials[key].opacity = buhosDefaultValues[index].material!.opacity!
      materials[key].emissive = materials.bordeaux_material.color
      materials[key].emissiveIntensity = buhosDefaultValues[index].material!.emissiveIntensity!
      materials[key].needsUpdate = buhosDefaultValues[index].material!.needsUpdate!
    })
  }, [index, materials])

  return (
    <group
      ref={ref}
      {...rest}
    >
      <mesh
        name='Buho_1'
        geometry={nodes.Buho_1.geometry}
        material={materials.pink_medium_material}
      />
      <mesh
        name='Buho_2'
        geometry={nodes.Buho_2.geometry}
        material={materials.green_medium_material}
      />
      <mesh
        name='Buho_3'
        geometry={nodes.Buho_3.geometry}
        material={materials.green_dark_material}
      />
      <mesh
        name='Buho_4'
        geometry={nodes.Buho_4.geometry}
        material={materials.yellow_light_material}
      />
      <mesh
        name='Buho_5'
        geometry={nodes.Buho_5.geometry}
        material={materials.violet_material}
      />
      <mesh
        name='Buho_6'
        geometry={nodes.Buho_6.geometry}
        material={materials.orange_material}
      />
      <mesh
        name='Buho_7'
        geometry={nodes.Buho_7.geometry}
        material={materials.red_material}
      />
      <mesh
        name='Buho_8'
        geometry={nodes.Buho_8.geometry}
        material={materials.bordeaux_material}
      />
      <mesh
        name='Buho_9'
        geometry={nodes.Buho_9.geometry}
        material={materials.white_material}
      />
      <mesh
        name='Buho_10'
        geometry={nodes.Buho_10.geometry}
        material={materials.blue_medium_material}
      />
      <mesh
        name='Buho_11'
        geometry={nodes.Buho_11.geometry}
        material={materials.yellow_medium_material}
      />
      <mesh
        name='Buho_12'
        geometry={nodes.Buho_12.geometry}
        material={materials.blue_light_material}
      />
      <mesh
        name='Buho_13'
        geometry={nodes.Buho_13.geometry}
        material={materials.blue_dark_material}
      />
      <mesh
        name='Buho_14'
        geometry={nodes.Buho_14.geometry}
        material={materials.green_kaki_material}
      />
      <mesh
        name='Buho_15'
        geometry={nodes.Buho_15.geometry}
        material={materials.pink_light_material}
      />
    </group>
  )
})

useGLTF.preload(glbConstants.HERO.ALSO_KNOW_AS.BUHO)
