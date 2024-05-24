import React from 'react'
import * as THREE from 'three'

import { default as snakeConstants } from '@/constants/new/canvas/snakeConstants.json'

export default function SnakeScene() {
  return (
    <mesh position={[snakeConstants.SNAKE_GAME.BOARD.WIDTH / 2, snakeConstants.SNAKE_GAME.BOARD.HEIGHT / 2, 0]}>
      <planeGeometry args={[snakeConstants.SNAKE_GAME.BOARD.WIDTH, snakeConstants.SNAKE_GAME.BOARD.HEIGHT, snakeConstants.SNAKE_GAME.BOARD.WIDTH, snakeConstants.SNAKE_GAME.BOARD.HEIGHT]} />
      <meshBasicMaterial color="green" side={THREE.DoubleSide} wireframe />
    </mesh>
  )
}
