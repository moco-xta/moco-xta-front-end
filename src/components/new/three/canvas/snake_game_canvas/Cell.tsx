import React from 'react'
import * as THREE from 'three'
import { Box } from '@react-three/drei'

import { CellComponentInterface } from '@/interfaces/new/snakeGameInterfaces'

import { SnakeCell } from '../../models/snake_game/SnakeCell'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

import variables from '@/styles/new/variables.module.scss'

export default function Cell({ cell }: CellComponentInterface) {
  return (
    <>
      {cell.status === 'FOOD' && (
        <Box
          key={`cell_box_${cell.position.x}_${cell.position.z}`}
          position={[cell.position.x, 0, cell.position.z]}
          scale={snakeGameConstants.SNAKE_GAME.SNAKE.CELL.SCALE}
          material={
            new THREE.MeshBasicMaterial({
              color: variables.gameboy_darker,
              transparent: true,
              opacity: 0.9,
            })
          }
          receiveShadow
          castShadow
        />
      )}
      {cell.status === 'SNAKE' && (
        <SnakeCell
          key={`cell_box_${cell.position.x}_${cell.position.z}`}
          position={[cell.position.x, 0, cell.position.z]}
          receiveShadow
          castShadow
        />
      )}
    </>
  )
}
