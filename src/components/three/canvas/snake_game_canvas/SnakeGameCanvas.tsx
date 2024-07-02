import React, { Suspense } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, SoftShadows } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import { useControls } from 'leva'

import SnakeGameCamera from './SnakeGameCamera'
import Lights from './Lights'
import SnakeScene from './SnakeGameScene'
import PostProcessing from './PostProcessing'

import { default as snakeGameConstants } from '@/constants/canvas/snakeGameConstants.json'

export default function SnakeGameCanvas() {
  const { enabled, ...config } = useControls({
    enabled: true,
    size: {
      value: 25,
      min: 0,
      max: 100,
    },
    focus: {
      value: 0,
      min: 0,
      max: 2,
    },
    samples: {
      value: 10,
      min: 1,
      max: 20,
      step: 1,
    },
  })

  return (
    <Canvas
      dpr={snakeGameConstants.CANVAS.DPR}
      shadows={{
        type: THREE.PCFSoftShadowMap,
      }}
      legacy={snakeGameConstants.CANVAS.LEGACY}
      linear
      flat
      gl={{
        antialias: snakeGameConstants.CANVAS.GL.ANTIALIAS,
        alpha: snakeGameConstants.CANVAS.GL.ALPHA,
        powerPreference: snakeGameConstants.CANVAS.GL.POWER_PREFERENCE,
      }}
    >
      <SnakeGameCamera />
      {/* <OrbitControls /> */}
      <Lights />
      <Suspense>
        <Physics debug>
          <SnakeScene />
        </Physics>
        {/* {enabled && <SoftShadows {...config} />} */}
        <PostProcessing />
      </Suspense>
    </Canvas>
  )
}
