import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Camera from './Camera'
import Lights from './lights/Lights'
import GreetingScene from './GreetingScene'
import PostProcessing from './PostProcessing'

import { default as greetingCanvasConstants } from '@/constants/canvas/home/greetingCanvasConstants.json'

interface GreetingCanvasInterface {
  timeline: GSAPTimeline
}

export default function GreetingCanvas({ timeline }: GreetingCanvasInterface) {
  return (
    <Canvas
      dpr={greetingCanvasConstants.CANVAS.DPR}
      legacy={greetingCanvasConstants.CANVAS.LEGACY}
      shadows
      onCreated={({ gl }) => {
        gl.setClearColor(0xfffff, 0)
        gl.autoClear = true
        gl.clearDepth()
      }}
      gl={{
        antialias: greetingCanvasConstants.CANVAS.GL.ANTIALIAS,
        alpha: greetingCanvasConstants.CANVAS.GL.ALPHA,
        powerPreference: greetingCanvasConstants.CANVAS.GL.POWER_PREFERENCE,
      }}
    >
      <Camera />
      <OrbitControls />
      <Lights timeline={timeline} />
      {/* <color
        attach='background'
        args={['#ffffff']}
      /> */}
      <Suspense fallback={null}>
        <GreetingScene timeline={timeline} />
        {/* <PostProcessing /> */}
      </Suspense>
    </Canvas>
  )
}
