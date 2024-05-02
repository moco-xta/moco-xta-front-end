import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/gltfConstants.json'
import { default as texturesConstants } from '@/constants/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    AmorLlamaAmor_1: THREE.Mesh
    AmorLlamaAmor_2: THREE.Mesh
  }
  materials: {
    ['black_frame.001']: THREE.MeshStandardMaterial
    ['paper.002']: THREE.MeshStandardMaterial
  }
}

export function AmorLlamaAmor(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    gltfConstants.AMOR_LLAMA_AMOR,
  ) as GLTFResult
  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.AmorLlamaAmor_1.geometry}
        material={materials['black_frame.001']}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.AmorLlamaAmor_2.geometry}
        material={materials['paper.002']}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.AMOR_LLAMA_AMOR)
