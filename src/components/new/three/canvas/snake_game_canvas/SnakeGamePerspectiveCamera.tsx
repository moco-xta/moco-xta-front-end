import React from 'react'
import * as THREE from 'three'
import { PerspectiveCamera } from '@react-three/drei'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

export default function SnakeGamePerspectiveCamera() {
  return (
    <group
      position={[
        snakeGameConstants.SNAKE_GAME.BOARD.WIDTH / 2,
        snakeGameConstants.PERSPECTIVE_CAMERA.POSITION.Y,
        snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT / 2,
      ]}
      rotation={[0, THREE.MathUtils.degToRad(45), 0]}
    >
      <PerspectiveCamera
        makeDefault
        rotation={[THREE.MathUtils.degToRad(-20), 0, 0]}
        fov={snakeGameConstants.PERSPECTIVE_CAMERA.FOV}
      />
    </group>
  )
}
