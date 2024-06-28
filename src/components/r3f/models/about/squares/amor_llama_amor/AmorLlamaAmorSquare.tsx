import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    AmorLlamaAmorSquare: THREE.Mesh
  }
  materials: {
    amor_llama_amor_square: THREE.MeshPhysicalMaterial
  }
}

export default function AmorLlamaAmorSquare(props: JSX.IntrinsicElements['mesh']) {
  const { nodes, materials } = useGLTF(gltfConstants.ABOUT.SQUARES.AMOR_LLAMA_AMOR.SQUARE) as GLTFResult

  return (
    <mesh
      geometry={nodes.AmorLlamaAmorSquare.geometry}
      material={materials.amor_llama_amor_square}
      receiveShadow
      castShadow
      {...props}
    />
  )
}

useGLTF.preload(gltfConstants.ABOUT.SQUARES.AMOR_LLAMA_AMOR.SQUARE)
