import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'

import { usePlayer } from '@/hooks/new/usePlayer'

import SnakeGamePerspectiveCamera from './SnakeGamePerspectiveCamera'
import SnakeScene from './SnakeGameScene'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

const INTENSITY = 250

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
      {/* <ambientLight intensity={4} /> */}
      {/* <>
        {[...Array(14)].map((_, x) => {
          return (
            <>
              {[...Array(10)].map((_, y) => (
                <pointLight
                  position={[x * 5, 0, y * 5]} 
                  intensity={10}
                  castShadow
                />
              ))}
            </>
          )
        })}
      </> */}
      {/* <pointLight
        position={[10, 0, 0]} 
        intensity={100}
        castShadow
      />
      <pointLight
        position={[20, 0, 0]} 
        intensity={100}
        castShadow
      />
      <pointLight
        position={[30, 0, 0]} 
        intensity={100}
        castShadow
      /> */}
      <ambientLight intensity={2 } />
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
        position={[snakeGameConstants.SNAKE_GAME.BOARD.WIDTH, 20, snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT]} 
        intensity={INTENSITY}
        castShadow
      />
      <pointLight
        position={[0, 20, snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT]} 
        intensity={INTENSITY}
        castShadow
      />
      <Suspense>
        <Physics debug>
          <SnakeScene />
        </Physics>
      </Suspense>
    </Canvas>
  )
}
