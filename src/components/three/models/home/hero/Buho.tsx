import React, { forwardRef, useLayoutEffect } from 'react'
import * as THREE from 'three'
import { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Buho_1: THREE.Mesh
    Buho_2: THREE.Mesh
    Buho_3: THREE.Mesh
    Buho_4: THREE.Mesh
    Buho_5: THREE.Mesh
    Buho_6: THREE.Mesh
    Buho_7: THREE.Mesh
    Buho_8: THREE.Mesh
    Buho_9: THREE.Mesh
    Buho_10: THREE.Mesh
    Buho_11: THREE.Mesh
    Buho_12: THREE.Mesh
    Buho_13: THREE.Mesh
    Buho_14: THREE.Mesh
    Buho_15: THREE.Mesh
  }
  materials: {
    pink_medium_material: THREE.MeshStandardMaterial
    green_medium_material: THREE.MeshStandardMaterial
    green_dark_material: THREE.MeshStandardMaterial
    yellow_light_material: THREE.MeshStandardMaterial
    violet_material: THREE.MeshStandardMaterial
    orange_material: THREE.MeshStandardMaterial
    red_material: THREE.MeshStandardMaterial
    bordeaux_material: THREE.MeshStandardMaterial
    white_material: THREE.MeshStandardMaterial
    blue_medium_material: THREE.MeshStandardMaterial
    yellow_medium_material: THREE.MeshStandardMaterial
    blue_light_material: THREE.MeshStandardMaterial
    blue_dark_material: THREE.MeshStandardMaterial
    green_kaki_material: THREE.MeshStandardMaterial
    pink_light_material: THREE.MeshStandardMaterial
  }
}

export const Buho = forwardRef<THREE.Group, GroupProps>(function Buho(props, ref) {
  const { nodes, materials } = useGLTF(glbConstants.HOME.HERO.BUHO) as GLTFResult

  useLayoutEffect(() => {
    Object.keys(materials).forEach(function (key, index) {
      // @ts-ignore
      materials[key].transparent = true
      // @ts-ignore
      materials[key].opacity = 0.1
      // @ts-ignore
      materials[key].emissive = materials.bordeaux_material.color
      // @ts-ignore
      materials[key].emissiveIntensity = 15
      // @ts-ignore
      materials[key].needsUpdate = true
    })
  }, [materials])

  return (
    <group
      ref={ref}
      {...props}
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

useGLTF.preload(glbConstants.HOME.HERO.BUHO)
