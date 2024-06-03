import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import {
  fruitGreenL,
  fruitGreenM,
  fruitGreenD,
  fruitRedXLL,
  fruitRedXL,
  fruitRedL,
  fruitRedM,
  fruitRedD,
  fruitRedXD,
} from '../../materials/snakeGameMaterials'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    Fruit_1: THREE.Mesh
    Fruit_2: THREE.Mesh
    Fruit_3: THREE.Mesh
    Fruit_4: THREE.Mesh
    Fruit_5: THREE.Mesh
    Fruit_6: THREE.Mesh
    Fruit_7: THREE.Mesh
    Fruit_8: THREE.Mesh
    Fruit_9: THREE.Mesh
  }
  materials: {}
}

export function Fruit(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF(
    gltfConstants.SNAKE_GAME.FRUIT,
  ) as GLTFResult
  return (
    <group
      {...props}
      dispose={null}
    >
      <mesh
        geometry={nodes.Fruit_1.geometry}
        material={fruitRedM}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Fruit_2.geometry}
        material={fruitRedL}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Fruit_3.geometry}
        material={fruitRedD}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Fruit_4.geometry}
        material={fruitRedXD}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Fruit_5.geometry}
        material={fruitRedXL}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Fruit_6.geometry}
        material={fruitRedXLL}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Fruit_7.geometry}
        material={fruitGreenM}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Fruit_8.geometry}
        material={fruitGreenL}
        receiveShadow
        castShadow
      />
      <mesh
        geometry={nodes.Fruit_9.geometry}
        material={fruitGreenD}
        receiveShadow
        castShadow
      />
    </group>
  )
}

useGLTF.preload(gltfConstants.SNAKE_GAME.FRUIT)
