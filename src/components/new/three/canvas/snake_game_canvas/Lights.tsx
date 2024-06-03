import React from 'react'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

const INTENSITY = 300

export default function Lights() {
  return (
    <>
      <ambientLight intensity={1.8} />
      <pointLight
        position={[0, 20, 0]}
        intensity={INTENSITY}
        castShadow
      />
      <pointLight
        position={[snakeGameConstants.SNAKE_GAME.BOARD.WIDTH, 20, 0]}
        intensity={INTENSITY}
        castShadow
      />
      <pointLight
        position={[
          snakeGameConstants.SNAKE_GAME.BOARD.WIDTH,
          20,
          snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT,
        ]}
        intensity={INTENSITY}
        castShadow
      />
      <pointLight
        position={[0, 20, snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT]}
        intensity={INTENSITY}
        castShadow
      />
    </>
  )
}
