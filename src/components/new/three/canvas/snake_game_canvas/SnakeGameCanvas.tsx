import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

import useSnakeGame from '@/hooks/new/useSnakeGame'

import SnakeScene from './SnakeGameScene'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'

export default function SnakeGameCanvas() {
  const { snake } = useSnakeGame()

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
      {/* <PerspectiveCamera
        makeDefault
        position={[
          snakeGameConstants.SNAKE_GAME.BOARD.WIDTH / 2,
          snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT / 2,
          snakeGameConstants.PERSPECTIVE_CAMERA.POSITION.Z,
        ]}
        rotation={[THREE.MathUtils.degToRad(90), THREE.MathUtils.degToRad(90), 0]}
        fov={snakeGameConstants.PERSPECTIVE_CAMERA.FOV}
        // @ts-ignore
        lookAt={new THREE.Vector3(snake[0].position.x, snake[0].position.y, snake[0].position.z)}
      /> */}
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
      {/* <OrbitControls /> */}
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
