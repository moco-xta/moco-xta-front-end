import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'

import { usePlayer } from '@/hooks/new/usePlayer'

import SnakeGamePerspectiveCamera from './SnakeGamePerspectiveCamera'
import SnakeScene from './SnakeGameScene'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

export default function SnakeGameCanvas() {
  usePlayer()

  return (
    <Canvas
      id='main_skills_canvas'
      dpr={snakeGameConstants.CANVAS.DPR}
      shadows
      legacy={snakeGameConstants.CANVAS.LEGACY}
      linear
      flat
      gl={{
        antialias: snakeGameConstants.CANVAS.GL.ANTIALIAS,
        alpha: snakeGameConstants.CANVAS.GL.ALPHA,
        powerPreference: snakeGameConstants.CANVAS.GL.POWER_PREFERENCE,
      }}
    >
      <SnakeGamePerspectiveCamera />
      <ambientLight intensity={4} />
      <Suspense>
        <Physics debug>
          <SnakeScene />
        </Physics>
      </Suspense>
    </Canvas>
  )
}
