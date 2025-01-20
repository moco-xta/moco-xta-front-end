import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { CuboidCollider, type RapierRigidBody, RigidBody } from '@react-three/rapier'

import type { GLTFResult } from '@/types/data/components/three/types'

import { materialsData } from '@/data/about/three/materialsData'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function DeskChair(props: JSX.IntrinsicElements['group']) {
  const { nodes /* materials */ } = useGLTF(glbConstants.LABORATORY.DESK_CHAIR) as GLTFResult

  const rigidBodyRef = useRef<RapierRigidBody>(null)

  useEffect(() => {
    if (rigidBodyRef.current) {
      rigidBodyRef.current.applyImpulse({ x: 0, y: 10, z: 0 }, true)
    }
  }, [])

  return (
    <RigidBody
      ref={rigidBodyRef}
      position={[0, 0.03, 0]}
      rotation={[-Math.PI, 1.067, -Math.PI]}
      // restitution={2}
      mass={0.1}
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      colliders={false}
    >
      <CuboidCollider
        args={[4, 4, 4]}
        position={new THREE.Vector3(0, 0, 0)}
      >
        <group
          position={[0, -4, 0]}
          {...props}
          dispose={null}
        >
          <mesh
            geometry={nodes.DeskChair_1.geometry}
            material={materialsData.toDoMaterial}
            receiveShadow
            castShadow
          />
          <mesh
            geometry={nodes.DeskChair_2.geometry}
            material={materialsData.toDoMaterial}
            receiveShadow
            castShadow
          />
          <mesh
            geometry={nodes.DeskChair_3.geometry}
            material={materialsData.toDoMaterial}
            receiveShadow
            castShadow
          />
        </group>
      </CuboidCollider>
    </RigidBody>
  )
}

useGLTF.preload(glbConstants.LABORATORY.DESK_CHAIR)
useGLTF.preload(glbConstants.LABORATORY.DESK_CHAIR)
