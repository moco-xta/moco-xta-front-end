import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Door: THREE.Mesh
  }
  materials: {
    ['paint_material_#fff']: THREE.MeshStandardMaterial
  }
}

export function Door(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(glbConstants.LABORATORY.DOOR) as GLTFResult

  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Door.geometry}
        material={materials['paint_material_#fff']}
        position={[-28.6, 0, -10]}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(glbConstants.LABORATORY.DOOR)
