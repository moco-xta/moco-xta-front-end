import React from 'react'
import * as THREE from 'three'

import Grid from './Grid'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'
import { Plane } from '@react-three/drei'

export default function SnakeGameScene() {
  return (
    <>
      <mesh
        position={[
          snakeGameConstants.SNAKE_GAME.BOARD.WIDTH / 2,
          snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT / 2,
          0,
        ]}
      >
        <planeGeometry
          args={[
            snakeGameConstants.SNAKE_GAME.BOARD.WIDTH,
            snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT,
            snakeGameConstants.SNAKE_GAME.BOARD.WIDTH,
            snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT,
          ]}
        />
        <meshBasicMaterial
          color='green'
          side={THREE.DoubleSide}
          wireframe
        />
      </mesh>
      <Grid />
      {/* <Plane
        args={[snakeGameConstants.SNAKE_GAME.BOARD.WIDTH, snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT]}
        position={[snakeGameConstants.SNAKE_GAME.BOARD.WIDTH / 2, snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT / 2, -0.5]}
        rotation={[THREE.MathUtils.degToRad(90), 0, 0]}
        material={new THREE.MeshBasicMaterial({
          color: '#c2bd03'
        })}
        receiveShadow
        castShadow
      /> */}
    </>
  )
}
