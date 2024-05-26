import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

import SnakeScene from './SnakeScene'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

export default function SnakeCanvas() {
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
      <PerspectiveCamera
        makeDefault
        position={[
          snakeGameConstants.SNAKE_GAME.BOARD.WIDTH / 2,
          snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT / 2,
          snakeGameConstants.PERSPECTIVE_CAMERA.POSITION.Z,
        ]}
        fov={snakeGameConstants.PERSPECTIVE_CAMERA.FOV}
      />
      {/* <ambientLight
        intensity={snakeGameConstants.LIGHTS.AMBIENT_LIGHT.INTENSITY}
      /> */}
      <pointLight
        position={[1.2, 1, 1]}
        intensity={1}
        castShadow
      />
      <pointLight
        position={[-1.2, 1, 1]}
        intensity={1}
        castShadow
      />
      <pointLight
        position={[0, -1, 2]}
        intensity={1}
        castShadow
      />
      <OrbitControls />
      <Suspense>
      {/* <directionalLight
        position={[0, 5, 2]}
        castShadow
        color={0x602376}
        intensity={1.0}
      /> */}
        <SnakeScene />
      </Suspense>
    </Canvas>
  )
}
