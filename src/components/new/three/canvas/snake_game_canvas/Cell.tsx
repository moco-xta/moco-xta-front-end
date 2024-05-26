import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import {
  Box,
  PerspectiveCamera,
  PointerLockControls,
  Sphere,
} from '@react-three/drei'

import { CellComponentInterface } from '@/interfaces/new/snakeGameInterfaces'

import { SnakeCell } from '../../models/snake_game/SnakeCell'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'
import useSnakeGame from '@/hooks/new/useSnakeGame'

export default function Cell({ cell }: CellComponentInterface) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null!)

  const { direction } = useSnakeGame()

  function setCameraRotation(direction: string) {
    switch (direction) {
      case 'RIGHT':
        return -Math.PI / 2
      case 'BOTTOM':
        return -Math.PI / 4
      /* case 'RIGHT': 
        return -Math.PI / 2
      case 'RIGHT': 
        return -Math.PI / 2 */
    }
  }

  useEffect(() => {}, [])

  return (
    <>
      {cell.status === 'FOOD' && (
        <Box
          key={`cell_box_${cell.position.x}_${cell.position.z}`}
          position={[cell.position.x, cell.position.z, 0]}
          scale={snakeGameConstants.SNAKE_GAME.SNAKE.CELL.SCALE}
          material={
            new THREE.MeshBasicMaterial({
              color: '#766200',
              transparent: true,
              /* opacity: 0.7 */
            })
          }
          receiveShadow
          castShadow
        />
      )}
      {/* {cell.status === 'SNAKE_HEAD' && (
        <SnakeCell
          key={`cell_box_${cell.position.x}_${cell.position.y}`}
          position={[cell.position.x, cell.position.y, 0]}
          receiveShadow
          castShadow
        >
          <group rotation={[0, THREE.MathUtils.degToRad(15), 0]}>
            <PerspectiveCamera
              ref={cameraRef}
              fov={35}
              rotation={[Math.PI / 2, -Math.PI / 2, 0]}
              rotation={[Math.PI / 2, setCameraRotation(direction), 0]}
              makeDefault={true}
              position={[-6, 0, 0.5]}
            />
          </group>
        </SnakeCell>
      )} */}
      {(cell.status === 'SNAKE' || cell.status === 'SNAKE_HEAD') && (
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

{
  /* <Sphere
          key={`cell_sphere_${cell.position.x}_${cell.position.y}`}
          position={[cell.position.x, cell.position.y, 0]}
          scale={snakeGameConstants.SNAKE_GAME.SNAKE.CELL.SCALE}
        /> */
}
