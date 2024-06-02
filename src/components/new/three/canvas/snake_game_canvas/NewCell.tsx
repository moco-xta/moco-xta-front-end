import React from 'react'

import { CellComponentInterface } from '@/interfaces/new/newSnakeGameInterfaces'

import { Fruit } from '../../models/snake_game/Fruit'
import { SnakeCell } from '../../models/snake_game/SnakeCell'

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
        <SnakeCell
          key={`snake_cell_${cell.position.x}_${cell.position.z}`}
          position={[cell.position.x, 0, cell.position.z]}
          rotation={setSnakeCellRotation(cell.snake.direction!)}
          scale={0.5}
          receiveShadow
          castShadow
        />
      )}
      {cell.status === 'SNAKE_STRAIGHT' && (
        <SnakeCell
          key={`snake_cell_${cell.position.x}_${cell.position.z}`}
          position={[cell.position.x, 0, cell.position.z]}
          rotation={setSnakeCellRotation(cell.snake.direction!)}
          scale={0.5}
          receiveShadow
          castShadow
        />
      )}
      {cell.status === 'SNAKE_CORNER' && (
        <Box
          key={`snake_cell_${cell.position.x}_${cell.position.z}`}
          position={[cell.position.x, 0, cell.position.z]}
          scale={0.5}
        >
          <meshStandardMaterial
            attach='material'
            color={'red'}
          />
        </Box>
      )}
    </>
  )
}
