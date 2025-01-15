import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'

import type { GLTFResult } from '@/types/data/components/three/types'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

export function Dodecahedron(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.LABORATORY.DODECAHEDRON) as GLTFResult

  return (
    <RigidBody restitution={2}>
      <group
        {...props}
        dispose={null}
      >
        <mesh
          geometry={nodes.Dodecahedron.geometry}
          material={materials.dodecahedron_material}
          position={[3.82, 18.12, -14.48]}
          receiveShadow
          castShadow
        />
      </group>
    </RigidBody>
  )
}

useGLTF.preload(glbConstants.LABORATORY.DODECAHEDRON)
