import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

import { default as gltfConstants } from '@/constants/new/assets/gltfConstants.json'
import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

type GLTFResult = GLTF & {
  nodes: {
    SnakeCell: THREE.Mesh
  }
  materials: {}
}

export function SnakeCell(props: JSX.IntrinsicElements['mesh']) {
  const { nodes } = useGLTF(gltfConstants.SNAKE_GAME.SNAKE_CELL) as GLTFResult
  return (
    <mesh
      geometry={nodes.SnakeCell.geometry}
      {...props}
    >
      <meshPhysicalMaterial
        attach='material'
        color={snakeGameConstants.SNAKE_GAME.MODELS.SNAKE_CELL.COLOR}
        roughness={snakeGameConstants.SNAKE_GAME.MODELS.SNAKE_CELL.ROUGHNESS}
        metalness={0.9}
        transparent
        opacity={snakeGameConstants.SNAKE_GAME.MODELS.SNAKE_CELL.OPACITY}
      />
      {props.children}
    </mesh>
  )
}

useGLTF.preload(gltfConstants.SNAKE_GAME.SNAKE_CELL)
