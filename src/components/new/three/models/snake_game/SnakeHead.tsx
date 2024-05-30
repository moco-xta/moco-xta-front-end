import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

import variables from '@/styles/new/variables.module.scss'

type GLTFResult = GLTF & {
  nodes: {
    SnakeHead: THREE.Mesh
  }
  materials: {}
}

export function SnakeHead(props: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(
    gltfConstants.SNAKE_GAME.SNAKE_HEAD,
  ) as GLTFResult
  return (
    <mesh
      geometry={nodes.SnakeHead.geometry}
      receiveShadow
      castShadow
      {...props}
    >
      <meshPhysicalMaterial
        attach='material'
        color={variables.snake_game_snake_cell}
        roughness={snakeGameConstants.SNAKE_GAME.MODELS.SNAKE_CELL.ROUGHNESS}
        metalness={0}
        transparent
        opacity={snakeGameConstants.SNAKE_GAME.MODELS.SNAKE_CELL.OPACITY}
      />
    </mesh>
  )
}

useGLTF.preload(gltfConstants.SNAKE_GAME.SNAKE_HEAD)
