import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { RigidBody } from '@react-three/rapier'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Icosahedron: THREE.Mesh
  }
  materials: {
    icosahedron_material: THREE.MeshStandardMaterial
  }
}

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
