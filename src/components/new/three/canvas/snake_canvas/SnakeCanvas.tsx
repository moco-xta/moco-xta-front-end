import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

import SnakeScene from './SnakeScene'

import { default as snakeConstants } from '@/constants/new/canvas/snakeConstants.json'

export default function SnakeCanvas() {
  return (
    <Canvas
      id='main_skills_canvas'
      dpr={snakeConstants.CANVAS.DPR}
      shadows
      legacy={snakeConstants.CANVAS.LEGACY}
      linear
      flat
      gl={{
        antialias: snakeConstants.CANVAS.GL.ANTIALIAS,
        alpha: snakeConstants.CANVAS.GL.ALPHA,
        powerPreference: snakeConstants.CANVAS.GL.POWER_PREFERENCE,
      }}
    >
      <PerspectiveCamera
        makeDefault
        position={[
          snakeConstants.SNAKE_GAME.BOARD.WIDTH / 2,
          snakeConstants.SNAKE_GAME.BOARD.HEIGHT / 2,
          snakeConstants.PERSPECTIVE_CAMERA.POSITION.Z,
        ]}
        fov={snakeConstants.PERSPECTIVE_CAMERA.FOV}
      />
      <ambientLight intensity={snakeConstants.LIGHTS.AMBIENT_LIGHT.INTENSITY} />
      <pointLight
        position={[1.2, 1, 1]}
        intensity={5}
        castShadow
      />{' '}
      <pointLight
        position={[-1.2, 1, 1]}
        intensity={5}
        castShadow
      />{' '}
      <pointLight
        position={[0, -1, 2]}
        intensity={5}
        castShadow
      />{' '}
      <Suspense>
        <SnakeScene />
      </Suspense>
    </Canvas>
  )
}
