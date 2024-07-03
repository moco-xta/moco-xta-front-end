import React from 'react'
import { Box } from '@react-three/drei'

import { default as snakeGameConstants } from '@/constants/canvas/snakeGameConstants.json'

import variables from '@/styles/variables.module.scss'

export default function Grid() {
  return (
    <>
      <>
        {[...Array(snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT + 1)].map((_, index) => {
          return (
            <Box
              key={`grid_row_${index}`}
              args={[snakeGameConstants.SNAKE_GAME.BOARD.WIDTH, 0.02, 0.02]}
              position={[snakeGameConstants.SNAKE_GAME.BOARD.WIDTH / 2, -0.5, index]}
              receiveShadow
              castShadow
            >
              <meshStandardMaterial
                attach='material'
                color={variables.snake_game_grid}
                roughness={1}
                metalness={0}
                transparent
                opacity={0.2}
              />
            </Box>
          )
        })}
      </>
      <>
        {[...Array(snakeGameConstants.SNAKE_GAME.BOARD.WIDTH + 1)].map((_, index) => {
          return (
            <Box
              key={`grid_column_${index}`}
              args={[0.02, 0.02, snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT]}
              position={[index, -0.5, snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT / 2]}
            >
              <meshStandardMaterial
                attach='material'
                color={variables.snake_game_grid}
                roughness={1}
                metalness={0}
                transparent
                opacity={0.2}
              />
            </Box>
          )
        })}
      </>
    </>
  )
}
