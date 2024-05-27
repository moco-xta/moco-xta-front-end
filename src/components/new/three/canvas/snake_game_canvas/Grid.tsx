import React from 'react'
import { Box } from '@react-three/drei'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

export default function Grid() {
  return (
    <>
      <>
        {[...Array(snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT + 1)].map(
          (_, index) => {
            return (
              <Box
                key={`grid_row_${index}`}
                args={[snakeGameConstants.SNAKE_GAME.BOARD.WIDTH, 0.02, 0.02]}
                position={[
                  snakeGameConstants.SNAKE_GAME.BOARD.WIDTH / 2,
                  -0.5,
                  index,
                ]}
              />
            )
          },
        )}
      </>
      <>
        {[...Array(snakeGameConstants.SNAKE_GAME.BOARD.WIDTH + 1)].map(
          (_, index) => {
            return (
              <Box
                key={`grid_column_${index}`}
                args={[0.02, 0.02, snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT]}
                position={[
                  index,
                  -0.5,
                  snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT / 2,
                ]}
              />
            )
          },
        )}
      </>
    </>
  )
}
