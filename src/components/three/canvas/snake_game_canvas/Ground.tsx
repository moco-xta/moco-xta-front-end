import React from 'react'
import * as THREE from 'three'

import { Grass } from '../../models/snake_game/Grass'

import { default as snakeGameConstants } from '@/constants/canvas/snakeGameConstants.json'
import { Plane } from '@react-three/drei'

export default function Ground() {
  /* return (
    <Plane
      args={[
        snakeGameConstants.SNAKE_GAME.BOARD.WIDTH,
        snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT,
      ]}
      position={[
        snakeGameConstants.SNAKE_GAME.BOARD.WIDTH / 2,
        -0.5,
        snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT / 2,
      ]}
      rotation={[THREE.MathUtils.degToRad(-90), 0, 0]}
      receiveShadow
    >
      <meshStandardMaterial attach='material' color={'white'} roughness={1} />
    </Plane>
  ) */
  return (
    <>
      {[...Array(snakeGameConstants.SNAKE_GAME.BOARD.WIDTH / 5)].map((_, columnIndex) => {
        return (
          <>
            {[...Array(snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT / 5)].map((_, rowIndex) => {
              return (
                <Grass
                  key={`grass_square_${columnIndex}_${rowIndex}`}
                  position={[columnIndex * 5 + 2, -0.5, rowIndex * 5 + 2]}
                />
              )
            })}
          </>
        )
      })}
    </>
  )
}
