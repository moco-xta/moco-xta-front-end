import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { glassMaterial } from '../../materials/glassMaterial'

import { default as gltfConstants } from '@/constants/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    AmorLlamaAmorGlass: THREE.Mesh
  }
  materials: {}
}

export function AmorLlamaAmorGlass(props: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.AMOR_LLAMA_AMOR_GLASS) as GLTFResult
  return (
    <mesh
      geometry={nodes.AmorLlamaAmorGlass.geometry}
      material={glassMaterial}
      {...props}
    />
  )
}

useGLTF.preload(gltfConstants.AMOR_LLAMA_AMOR_GLASS)
