import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

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
  )
}

useGLTF.preload(glbConstants.LABORATORY.OCTAHEDRON)
