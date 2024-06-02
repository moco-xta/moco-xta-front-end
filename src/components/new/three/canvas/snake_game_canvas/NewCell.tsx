import React from 'react'

import { CellComponentInterface } from '@/interfaces/new/newSnakeGameInterfaces'

import { Fruit } from '../../models/snake_game/Fruit'
import { SnakeCellStraight } from '../../models/snake_game/SnakeCellStraight'
import { SnakeCellCorner } from '../../models/snake_game/SnakeCellCorner'

import { setSnakeCellRotation } from '@/helpers/new/snake_game'
import { Box } from '@react-three/drei'

export default function NewCell({ cell }: CellComponentInterface) {
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
        <SnakeCellStraight
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
          rotation={setSnakeCellRotation(cell.snake.direction!)}
          receiveShadow
          castShadow
        />
      )}
    </>
  )
}
