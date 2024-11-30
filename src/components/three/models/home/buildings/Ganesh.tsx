import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import useTextureLoader from '@/hooks/useTextureLoader'

import { default as glbConstants } from '@/constants/assets/glbConstants.json'
import { default as texturesConstants } from '@/constants/assets/texturesConstants.json'

import variables from '@/styles/variables.module.scss'

type GLTFResult = GLTF & {
  nodes: {
    Ganesh: THREE.Mesh
  }
  materials: {}
}

export function Ganesh(props: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(glbConstants.HOME.GANESH) as GLTFResult

  const ganeshMap = useTextureLoader(
    // @ts-ignore
    texturesConstants.HOME.GANESH.DIFFUSE,
  )
  ganeshMap.flipY = false

  const ganeshMaterial = new THREE.MeshStandardMaterial({
    // color: variables.gamma_red,
    map: ganeshMap,
    roughness: 1,
    emissive: 'white',
    emissiveMap: ganeshMap,
    emissiveIntensity: 0.1,
    transparent: true,
    opacity: 0.25,
  })

  return (
    <mesh
      dispose={null}
      name='Ganesh'
      geometry={nodes.Ganesh.geometry}
      material={ganeshMaterial}
      {...props}
      receiveShadow
      castShadow
    />
  )
}

useGLTF.preload(glbConstants.HOME.GANESH)
