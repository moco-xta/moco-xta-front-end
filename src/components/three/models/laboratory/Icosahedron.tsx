import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

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
  )
}

useGLTF.preload(glbConstants.LABORATORY.ICOSAHEDRON)
