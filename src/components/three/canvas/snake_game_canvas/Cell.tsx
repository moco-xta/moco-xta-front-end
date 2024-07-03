import React from 'react'

import { CellComponentInterface } from '@/interfaces/snakeGameInterfaces'

import { Fruit } from '../../models/snake_game/Fruit'
import { SnakeHead } from '../../models/snake_game/SnakeHead'
import { SnakeCellStraight } from '../../models/snake_game/SnakeCellStraight'
import { SnakeCellCorner } from '../../models/snake_game/SnakeCellCorner'
/* import { ArrowTest } from '../../models/snake_game/ArrowTest' */

import {
  setSnakeCellCornerRotation,
  setSnakeCellCornerScale,
  setSnakeCellRotation,
} from '@/helpers/snake_game'

export default function Cell({ cell }: CellComponentInterface) {
  return (
    <>
      {cell.status === 'FOOD' && (
        <Fruit
          key={`fruit_${cell.position.x}_${cell.position.z}`}
          position={[cell.position.x, 0, cell.position.z]}
          receiveShadow
          castShadow
        />
      )}
      {cell.status === 'SNAKE_HEAD' && (
        <SnakeHead
          key={`snake_cell_${cell.position.x}_${cell.position.z}`}
          position={[cell.position.x, 0, cell.position.z]}
          rotation={setSnakeCellRotation(cell.snake.direction!)}
          receiveShadow
          castShadow
        />
      )}
      {cell.status === 'SNAKE_STRAIGHT' && (
        <SnakeCellStraight
          key={`snake_cell_${cell.position.x}_${cell.position.z}`}
          position={[cell.position.x, 0, cell.position.z]}
          rotation={setSnakeCellRotation(cell.snake.direction!)}
          receiveShadow
          castShadow
        />
      )}
      {cell.status === 'SNAKE_CORNER' && (
        <SnakeCellCorner
          key={`snake_cell_${cell.position.x}_${cell.position.z}`}
          position={[cell.position.x, 0, cell.position.z]}
          rotation={setSnakeCellCornerRotation(cell.snake.cornerType!)}
          scale={setSnakeCellCornerScale(cell.snake.direction!)}
          receiveShadow
          castShadow
        />
      )}
    </>
  )
}
