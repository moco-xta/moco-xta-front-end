import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Camera from './Camera'
import Lights from './Lights'
import GreetingScene from './GreetingScene'
import PostProcessing from './PostProcessing'

import { default as greetingCanvasConstants } from '@/constants/canvas/home/greetingCanvasConstants.json'

export default function GreetingCanvas() {
  return (
    <Canvas
      dpr={greetingCanvasConstants.CANVAS.DPR}
      legacy={greetingCanvasConstants.CANVAS.LEGACY}
      shadows
      gl={{
        antialias: greetingCanvasConstants.CANVAS.GL.ANTIALIAS,
        alpha: greetingCanvasConstants.CANVAS.GL.ALPHA,
        powerPreference: greetingCanvasConstants.CANVAS.GL.POWER_PREFERENCE,
      }}
    >
      <Camera />
      <OrbitControls />
      <Lights />
      <Suspense fallback={null}>
        <GreetingScene />
        <PostProcessing />
      </Suspense>
    </Canvas>
  )
}