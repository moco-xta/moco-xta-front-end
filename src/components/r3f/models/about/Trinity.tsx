import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/gltfConstants.json'
import { default as texturesConstants } from '@/constants/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Trinity_1: THREE.Mesh
    Trinity_2: THREE.Mesh
  }
  materials: {
    ['gold']: THREE.MeshStandardMaterial
    ['trinity']: THREE.MeshStandardMaterial
  }
}

export function Trinity(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(gltfConstants.TRINITY) as GLTFResult
  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Trinity_1.geometry}
        material={materials['gold']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Trinity_2.geometry}
        material={materials['trinity']}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.TRINITY)
