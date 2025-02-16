import React from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

import type { GLTFResult } from '@/types/data/components/three/types'

import { materialsData } from '@/data/about/three/materialsData'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function Walls(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(glbConstants.LABORATORY.WALLS) as GLTFResult

  return (
    <group
      {...props}
      dispose={null}
    >
      {/* <RigidBody
        colliders='trimesh'
        type='fixed'
      > */}
      <mesh
        geometry={nodes.Walls_1.geometry}
        material={materialsData.whitePaintMaterial}
        receiveShadow
        castShadow
      />
      {/* </RigidBody> */}
      <RigidBody
        colliders='trimesh'
        type='fixed'
      >
        <mesh
          geometry={nodes.Walls_2.geometry}
          material={materialsData.whitePaintMaterial}
          receiveShadow
          castShadow
        />
      </RigidBody>
      <RigidBody
        colliders='trimesh'
        type='fixed'
      >
        <mesh
          geometry={nodes.Walls_3.geometry}
          material={materialsData.whitePaintMaterial}
          receiveShadow
          castShadow
        />
      </RigidBody>
    </group>
  )
}

useGLTF.preload(glbConstants.LABORATORY.WALLS)
