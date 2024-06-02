import React from 'react'

import { Grass } from '../../models/snake_game/Grass'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

export default function Ground() {
  return (
    <>
      {[...Array(snakeGameConstants.SNAKE_GAME.BOARD.WIDTH / 5)].map(
        (_, columnIndex) => {
          return (
            <>
              {[...Array(snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT / 5)].map(
                (_, rowIndex) => {
                  return (
                    <Grass
                      key={`grass_square_${columnIndex}_${rowIndex}`}
                      position={[
                        columnIndex * 5 + 2.5,
                        -0.5,
                        rowIndex * 5 + 2.5,
                      ]}
                    />
                  )
                },
              )}
            </>
          )
        },
      )}
    </>
  )
}
