import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  PerspectiveCamera,
  Plane,
  PointerLockControls,
} from '@react-three/drei'

import useSnakeGame from '@/hooks/new/useSnakeGame'

import SnakeScene from './SnakeGameScene'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'
import SnakeGamePerspectiveCamera from './SnakeGamePerspectiveCamera'
import { usePlayer } from '@/hooks/new/usePlayer'
import Player from '../controls/Player'
import { Physics, RigidBody } from '@react-three/rapier'

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
      <Suspense>
        <Physics debug>
          <SnakeScene />
        </Physics>
      </Suspense>
    </Canvas>
  )
}
