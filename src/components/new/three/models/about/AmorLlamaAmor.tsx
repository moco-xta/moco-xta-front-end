import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { default as texturesConstants } from '@/constants/new/assets/texturesConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    AmorLlamaAmor_1: THREE.Mesh
    AmorLlamaAmor_2: THREE.Mesh
  }
  materials: {}
}

export function AmorLlamaAmor({ position }: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.ABOUT.AMOR_LLAMA_AMOR) as GLTFResult

  const amorllamaAmorMap = useTextureLoader(
    texturesConstants.ABOUT.FINAL.HOY_SI.DIFFUSE.ONE_K,
  )
  amorllamaAmorMap.flipY = false

  const amorLlamaAmorMaterial = new THREE.MeshPhysicalMaterial({
    /* color: '#ddd', */
    map: amorllamaAmorMap,
    roughness: 0.5,
    metalness: 0.2,
  })

  const amorLlamaAmorFrameMaterial = new THREE.MeshStandardMaterial({
    color: '#000000',
    roughness: 0.6,
  })

  return (
    <group
      name='AmorLlamaAmor'
      position={position}
      dispose={null}
    >
      <mesh
        name='AmorLlamaAmor_1'
        geometry={nodes.AmorLlamaAmor_1.geometry}
        material={amorLlamaAmorFrameMaterial}
        receiveShadow
        castShadow
      />
      <mesh
        name='AmorLlamaAmor_2'
        geometry={nodes.AmorLlamaAmor_2.geometry}
        material={amorLlamaAmorMaterial}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.ABOUT.AMOR_LLAMA_AMOR)
