import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { RigidBody } from '@react-three/rapier'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Tetrahedron: THREE.Mesh
  }
  materials: {
    tetrahedron_material: THREE.MeshStandardMaterial
  }
}

export function Tetrahedron(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.LABORATORY.TETRAHEDRON) as GLTFResult

  return (
    <RigidBody restitution={2}>
      <group
        {...props}
        dispose={null}
      >
        <mesh
          geometry={nodes.Tetrahedron.geometry}
          material={materials.tetrahedron_material}
          position={[4.034, 18.12, -15.305]}
          receiveShadow
          castShadow
        />
      </group>
    </RigidBody>
  )
}

useGLTF.preload(glbConstants.LABORATORY.TETRAHEDRON)
