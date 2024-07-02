import React from 'react'
import * as THREE from 'three'
import { Box } from '@react-three/drei'

import { CellComponentInterface } from '@/interfaces/new/snakeGameInterfaces'

/* import { SnakeCell } from '../../models/snake_game/SnakeCell' */
import { SnakeHead } from '../../models/snake_game/SnakeHead'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

import variables from '@/styles/new/variables.module.scss'
import { Fruit } from '../../models/snake_game/Fruit'
/* import { setSnakeCellRotation } from '@/helpers/new/snakeGameHelpers' */

export default function Cell({ cell }: CellComponentInterface) {
  return (
    <>
      {/* {cell.status === 'FOOD' && (
        <Fruit
          key={`fruit_${cell.position.x}_${cell.position.z}`}
          position={[cell.position.x, 0, cell.position.z]}
          receiveShadow
          castShadow
        />
      )} */}
      {/* {cell.status === 'SNAKE_HEAD' && (
        <SnakeHead
          key={`snake_cell_${cell.position.x}_${cell.position.z}`}
          position={[cell.position.x, 0, cell.position.z]}
          scale={0.5}
          receiveShadow
          castShadow
        />
      )} */}
      {/* {cell.status === 'SNAKE_HEAD' ||
        (cell.status === 'SNAKE' && (
          <SnakeCell
            key={`snake_cell_${cell.position.x}_${cell.position.z}`}
            position={[cell.position.x, 0, cell.position.z]}
            rotation={setSnakeCellRotation(cell.snakeCellDirection!)}
            scale={0.5}
            receiveShadow
            castShadow
          />
        ))} */}
    </>
  )
}
