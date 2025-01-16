import React from 'react'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'
import { RigidBody } from '@react-three/rapier'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function Cube(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.LABORATORY.CUBE) as GLTFResult

  return (
    <RigidBody restitution={2}>
      <group
        {...props}
        dispose={null}
      >
        <mesh
          geometry={nodes.Cube.geometry}
          material={materials.cube_material}
          position={[4.377, 18.12, -14.612]}
          receiveShadow
          castShadow
        />
      </group>
    </RigidBody>
  )
}

useGLTF.preload(glbConstants.LABORATORY.CUBE)
