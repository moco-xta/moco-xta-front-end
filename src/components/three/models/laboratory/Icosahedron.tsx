import React from 'react'
import { useGLTF } from '@react-three/drei'

import type { GLTFResult } from '@/types/data/components/three/types'
import { RigidBody } from '@react-three/rapier'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function Icosahedron(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.LABORATORY.ICOSAHEDRON) as GLTFResult

  return (
    <RigidBody restitution={2}>
      <group
        {...props}
        dispose={null}
      >
        <mesh
          geometry={nodes.Icosahedron.geometry}
          material={materials.icosahedron_material}
          position={[3.621, 18.12, -15.221]}
          receiveShadow
          castShadow
        />
      </group>
    </RigidBody>
  )
}

useGLTF.preload(glbConstants.LABORATORY.ICOSAHEDRON)
