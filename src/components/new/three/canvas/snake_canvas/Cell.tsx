import React from 'react'
import * as THREE from 'three'
import { Box, Sphere } from '@react-three/drei'

import { CellComponentInterface } from '@/interfaces/new/snakeGameInterfaces'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

export default function Cell({ cell }: CellComponentInterface) {
  return (
    <>
      {cell.status === 'SNAKE' && (
        <Box
          key={`cell_box_${cell.position.x}_${cell.position.y}`}
          position={[cell.position.x, cell.position.y, 0]}
          scale={snakeGameConstants.SNAKE_GAME.SNAKE.CELL.SCALE}
          material={new THREE.MeshBasicMaterial({
            color: '#766200',
            transparent: true,
            /* opacity: 0.7, */
          })}
          receiveShadow
          castShadow
        />
      )}
      {cell.status === 'FOOD' && (
        <Box
          key={`cell_box_${cell.position.x}_${cell.position.y}`}
          position={[cell.position.x, cell.position.y, 0]}
          scale={snakeGameConstants.SNAKE_GAME.SNAKE.CELL.SCALE}
          material={new THREE.MeshBasicMaterial({
            color: '#766200',
            transparent: true,
            /* opacity: 0.7 */
          })}
          receiveShadow
          castShadow
        />
      )}
    </>
  )
}


        {/* <Sphere
          key={`cell_sphere_${cell.position.x}_${cell.position.y}`}
          position={[cell.position.x, cell.position.y, 0]}
          scale={snakeGameConstants.SNAKE_GAME.SNAKE.CELL.SCALE}
        /> */}