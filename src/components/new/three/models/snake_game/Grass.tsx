import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { grassGreenXL, grassGreenL, grassGreenM, grassGreenD, grassGreenXD } from '../../materials/snakeGameMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Grass_1: THREE.Mesh
    Grass_2: THREE.Mesh
    Grass_3: THREE.Mesh
    Grass_4: THREE.Mesh
    Grass_5: THREE.Mesh
  }
  materials: {}
}

export function Grass(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF(gltfConstants.SNAKE_GAME.GRASS) as GLTFResult
  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Grass_1.geometry}
        material={grassGreenM}
        receiveShadow
      />
      <mesh
        geometry={nodes.Grass_2.geometry}
        material={grassGreenD}
        receiveShadow
      />
      <mesh
        geometry={nodes.Grass_3.geometry}
        material={grassGreenXD}
        receiveShadow
      />
      <mesh
        geometry={nodes.Grass_4.geometry}
        material={grassGreenXL}
        receiveShadow
      />
      <mesh
        geometry={nodes.Grass_5.geometry}
        material={grassGreenL}
        receiveShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.SNAKE_GAME.GRASS)
