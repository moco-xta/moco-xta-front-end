import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { RigidBody } from '@react-three/rapier'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Octahedron: THREE.Mesh
  }
  materials: {
    octahedron_material: THREE.MeshStandardMaterial
  }
}

export function Octahedron(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.LABORATORY.OCTAHEDRON) as GLTFResult

  return (
    <RigidBody restitution={2}>
      <group
        {...props}
        dispose={null}
      >
        <mesh
          geometry={nodes.Octahedron.geometry}
          material={materials.octahedron_material}
          position={[3.414, 18.12, -14.86]}
          receiveShadow
          castShadow
        />
      </group>
    </RigidBody>
  )
}

useGLTF.preload(glbConstants.LABORATORY.OCTAHEDRON)
