import React from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { useSelector } from 'react-redux'

import { RootState } from '@/redux/store'

import { updateCamera } from '@/helpers/new/snakeGameHelpers'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

export default function SnakeGamePerspectiveCamera() {
  const snakeGameState = useSelector((state: RootState) => state.snakeGame)

  useFrame((state) => {
    const { position, rotation } = updateCamera(
      snakeGameState.snake[0],
      snakeGameState.direction,
    )
    state.camera.position.set(position.x, position.y, position.z)
    state.camera.rotation.set(rotation.x, rotation.y, rotation.z)
  })

  return (
    <PerspectiveCamera
      makeDefault
      position={[
        snakeGameConstants.SNAKE_GAME.BOARD.WIDTH / 2,
        1,
        snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT / 2,
      ]}
      rotation={[
        THREE.MathUtils.degToRad(0),
        THREE.MathUtils.degToRad(-90),
        THREE.MathUtils.degToRad(0),
      ]}
      fov={snakeGameConstants.PERSPECTIVE_CAMERA.FOV}
    />
  )
}
