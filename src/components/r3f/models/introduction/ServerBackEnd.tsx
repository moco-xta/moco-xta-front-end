import React from 'react'
import * as THREE from 'three'
import { GroupProps } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    ServerBackEnd_1: THREE.Mesh
    ServerBackEnd_2: THREE.Mesh
  }
  materials: {
    background: THREE.MeshStandardMaterial
    image: THREE.MeshStandardMaterial
  }
}

export function ServerBackEnd(props: GroupProps) {
  const { nodes, materials } = useGLTF(gltfConstants.SERVER_BACK_END) as GLTFResult
  return (
    <group
      dispose={null}
      {...props}
      scale={2.5}
    >
      <mesh
        geometry={nodes.ServerBackEnd_1.geometry}
        material={materials.background}
      />
      <mesh
        geometry={nodes.ServerBackEnd_2.geometry}
        material={materials.image}
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.SERVER_BACK_END)
