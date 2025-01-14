import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Dodecahedron: THREE.Mesh
  }
  materials: {
    dodecahedron_material: THREE.MeshStandardMaterial
  }
}

export function Dodecahedron(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.LABORATORY.DODECAHEDRON) as GLTFResult

  return (
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
  )
}

useGLTF.preload(glbConstants.LABORATORY.DODECAHEDRON)
