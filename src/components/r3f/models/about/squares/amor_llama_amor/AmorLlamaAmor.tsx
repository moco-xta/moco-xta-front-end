import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    AmorLlamaAmor: THREE.Mesh
  }
  materials: {
    amor_llama_amor: THREE.MeshStandardMaterial
  }
}

export default function AmorLlamaAmor(props: JSX.IntrinsicElements['mesh']) {
  const { nodes, materials } = useGLTF(
    gltfConstants.ABOUT.SQUARES.AMOR_LLAMA_AMOR.PICTURE,
  ) as GLTFResult

  return (
    <mesh
      geometry={nodes.AmorLlamaAmor.geometry}
      material={materials.amor_llama_amor}
      receiveShadow
      castShadow
      {...props}
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.SQUARES.AMOR_LLAMA_AMOR.PICTURE)
