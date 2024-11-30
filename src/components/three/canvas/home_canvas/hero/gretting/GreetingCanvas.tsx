import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Box, OrbitControls } from '@react-three/drei'

import Camera from './Camera'
import Lights from './Lights'
import GreetingScene from './GreetingScene'

import { default as greetingCanvasConstants } from '@/constants/canvas/home/greetingCanvasConstants.json'

export default function GreetingCanvas() {
  return (
    <section
      id='greeting_canvas'
      className='fullscreen'
      style={{ zIndex: 1, position: 'fixed' }}
    >
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
        </Suspense>
      </Canvas>
    </section>
  )
}
