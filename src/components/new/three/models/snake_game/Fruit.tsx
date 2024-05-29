import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

import variables from '@/styles/new/variables.module.scss'

type GLTFResult = GLTF & {
  nodes: {
    Fruit: THREE.Mesh
  }
  materials: {}
}

export function Fruit(props: JSX.IntrinsicElements['mesh']) {
  const { nodes, materials } = useGLTF(
    gltfConstants.SNAKE_GAME.FRUIT,
  ) as GLTFResult
  return (
    <mesh
      geometry={nodes.Fruit.geometry}
      scale={0.5}
      receiveShadow
      castShadow
      {...props}
    >
      <meshPhysicalMaterial
        attach='material'
        color={variables.snake_game_fruit}
        roughness={snakeGameConstants.SNAKE_GAME.MODELS.SNAKE_CELL.ROUGHNESS}
        metalness={0}
        transparent
        opacity={snakeGameConstants.SNAKE_GAME.MODELS.SNAKE_CELL.OPACITY}
      />
    </mesh>
  )
}

useGLTF.preload(gltfConstants.SNAKE_GAME.FRUIT)
