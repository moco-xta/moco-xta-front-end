import React from 'react'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function AmsterdamScene(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.PROJECTS.AMSTERDAM_SCENE) as GLTFResult

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Tree.geometry}
        material={materials.material_tree}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Boat.geometry}
        material={materials.material_boat}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.SidewalkHouseSide.geometry}
        material={materials.material_sidewalk}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Bicycle.geometry}
        material={materials.material_bicycle}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Road.geometry}
        material={materials.material_road}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Cloud003.geometry}
        material={materials.material_cloud_003}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Cloud002.geometry}
        material={materials.material_clouds_002_004}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Cloud004.geometry}
        material={materials.material_clouds_002_004}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Cloud001.geometry}
        material={materials.material_cloud_001}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.AmsterdamHouse.geometry}
        material={materials.material_amsterdam_house}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.SidewalkCanalSide.geometry}
        material={materials.material_sidewalk}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Water.geometry}
        material={materials.material_water}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.Bark.geometry}
        material={materials.material_bark}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.CanalWall_1.geometry}
        material={materials.material_wall_canal_001}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes.CanalWall_2.geometry}
        material={materials.material_wall_canal_002}
        castShadow
        receiveShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.PROJECTS.AMSTERDAM_SCENE)
