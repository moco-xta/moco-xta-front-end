import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'

import SnakeGamePerspectiveCamera from './SnakeGamePerspectiveCamera'
import Lights from './Lights'
import SnakeScene from './SnakeGameScene'
import PostProcessing from './PostProcessing'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

export default function SnakeGameCanvas() {
  return (
    <Canvas
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
      <Lights />
      <Suspense>
        <Physics debug>
          <SnakeScene />
        </Physics>
        <PostProcessing />
      </Suspense>
    </Canvas>
  )
}
