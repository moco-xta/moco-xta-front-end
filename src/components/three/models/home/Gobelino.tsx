import * as THREE from 'three'
import React, { forwardRef, useEffect, useLayoutEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { GroupProps } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Gobelino_1: THREE.Mesh
    Gobelino_2: THREE.Mesh
    Gobelino_3: THREE.Mesh
    Gobelino_4: THREE.Mesh
    Gobelino_5: THREE.Mesh
    Gobelino_6: THREE.Mesh
    Gobelino_7: THREE.Mesh
    Gobelino_8: THREE.Mesh
    Gobelino_9: THREE.Mesh
    Gobelino_10: THREE.Mesh
    Gobelino_11: THREE.Mesh
    Gobelino_12: THREE.Mesh
    Gobelino_13: THREE.Mesh
  }
  materials: {
    sky_material: THREE.MeshStandardMaterial
    tree_trunck_material: THREE.MeshStandardMaterial
    sun_material: THREE.MeshStandardMaterial
    clouds_material: THREE.MeshStandardMaterial
    tree_leafs_material: THREE.MeshStandardMaterial
    window_001_material: THREE.MeshStandardMaterial
    roof_001_material: THREE.MeshStandardMaterial
    house_001_material: THREE.MeshStandardMaterial
    trunk_002_material: THREE.MeshStandardMaterial
    leaf_flower_tree_001_material: THREE.MeshStandardMaterial
    plant_002_material: THREE.MeshStandardMaterial
    plant_001_material: THREE.MeshStandardMaterial
  }
}

export const Gobelino = forwardRef<THREE.Group, GroupProps>(function Gobelino(props, ref) {
  const { nodes, materials } = useGLTF(glbConstants.HOME.GOBELINO) as GLTFResult

  useLayoutEffect(() => {
    Object.keys(materials).forEach(function (material, index) {
      console.log('materials[material]', materials[material])
      materials[material].transparent = true
      materials[material].opacity = 0
      materials[material].needsUpdate = true
    })
  }, [materials])

  return (
    <group
      name='Gobelino'
      ref={ref}
      scale={0.2}
      {...props}
      dispose={null}
    >
      <mesh
        name='Gobelino_1'
        geometry={nodes.Gobelino_1.geometry}
        material={materials.sky_material}
      />
      <mesh
        name='Gobelino_2'
        geometry={nodes.Gobelino_2.geometry}
        material={materials.tree_trunck_material}
        receiveShadow
        castShadow
      />
      <mesh
        name='Gobelino_3'
        geometry={nodes.Gobelino_3.geometry}
        material={materials.sun_material}
      />
      <mesh
        name='Gobelino_4'
        geometry={nodes.Gobelino_4.geometry}
        material={materials.clouds_material}
      />
      <mesh
        name='Gobelino_5'
        geometry={nodes.Gobelino_5.geometry}
        material={materials.tree_leafs_material}
        receiveShadow
        castShadow
      />
      <mesh
        name='Gobelino_6'
        geometry={nodes.Gobelino_6.geometry}
        material={materials.window_001_material}
        receiveShadow
        castShadow
      />
      <mesh
        name='Gobelino_7'
        geometry={nodes.Gobelino_7.geometry}
        material={materials.roof_001_material}
        receiveShadow
        castShadow
      />
      <mesh
        name='Gobelino_8'
        geometry={nodes.Gobelino_8.geometry}
        material={materials.house_001_material}
        receiveShadow
        castShadow
      />
      <mesh
        name='Gobelino_9'
        geometry={nodes.Gobelino_9.geometry}
        material={materials.trunk_002_material}
        receiveShadow
        castShadow
      />
      <mesh
        name='Gobelino_10'
        geometry={nodes.Gobelino_10.geometry}
        material={materials.leaf_flower_tree_001_material}
        receiveShadow
        castShadow
      />
      <mesh
        name='Gobelino_11'
        geometry={nodes.Gobelino_11.geometry}
        material={materials.plant_002_material}
        receiveShadow
        castShadow
      />
      <mesh
        name='Gobelino_12'
        geometry={nodes.Gobelino_12.geometry}
        material={materials.plant_001_material}
        receiveShadow
        castShadow
      />
      <mesh
        name='Gobelino_13'
        geometry={nodes.Gobelino_13.geometry}
        material={materials.leaf_flower_tree_001_material}
        receiveShadow
        castShadow
      />
    </group>
  )
})

useGLTF.preload(glbConstants.HOME.GOBELINO)
