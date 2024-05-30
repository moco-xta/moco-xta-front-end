import React, { Suspense, useState } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Box, OrthographicCamera } from '@react-three/drei'

import Board from './Board'

import { default as snakeGameConstants } from '@/constants/new/canvas/snakeGameConstants.json'
import SnakeGamePerspectiveCamera from '../snake_game_canvas/SnakeGamePerspectiveCamera'

const INTENSITY = 500
const TEST = 100

export default function SnakePlanCanvas() {
  const [isZoom, setZoom] = useState(false)
  const toggleZoom = () => setZoom((active) => !active)
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
      <OrthographicCamera
        makeDefault
        /* position={[
          snakeGameConstants.SNAKE_GAME.BOARD.WIDTH / 2,
          0,
          snakeGameConstants.SNAKE_GAME.BOARD.HEIGHT / 2,
        ]} */
        rotation={[
          THREE.MathUtils.degToRad(90),
          THREE.MathUtils.degToRad(0),
          THREE.MathUtils.degToRad(0),
        ]}
        right={2.5}
        left={-2.5}
        bottom={-2.5}
        top={2.5}
        zoom={3}
        /* near={0.1} */
        /* far={500} */
      />
      {/* <SnakeGamePerspectiveCamera /> */}
      <ambientLight intensity={2} />
      <Suspense>
        <Box position={[0, 0, 0]} />
        <gridHelper args={[10, 10, `white`, `gray`]} />
        <mesh
          onClick={toggleZoom}
          position={[0, 1, 0]}
        >
          <boxGeometry
            attach='geometry'
            args={[1, 1, 1]}
          />
          <meshNormalMaterial attach='material' />
        </mesh>
        <Board />
      </Suspense>
    </Canvas>
  )
}
