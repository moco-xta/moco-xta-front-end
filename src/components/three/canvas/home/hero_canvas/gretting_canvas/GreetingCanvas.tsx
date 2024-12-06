import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Camera from './Camera'
import Lights from './lights/Lights'
import GreetingScene from './GreetingScene'
import PostProcessing from './PostProcessing'

import { default as heroCanvasConstants } from '@/constants/canvas/home/heroCanvasConstants.json'

interface GreetingCanvasInterface {
  timeline: GSAPTimeline
}

export default function GreetingCanvas({ timeline }: GreetingCanvasInterface) {
  return (
    <Canvas
      dpr={heroCanvasConstants.CANVAS.DPR}
      legacy={heroCanvasConstants.CANVAS.LEGACY}
      shadows
      onCreated={({ gl }) => {
        gl.setClearColor(0xfffff, 0)
        gl.autoClear = true
        gl.clearDepth()
      }}
      gl={{
        antialias: heroCanvasConstants.CANVAS.GL.ANTIALIAS,
        alpha: heroCanvasConstants.CANVAS.GL.ALPHA,
        powerPreference: heroCanvasConstants.CANVAS.GL.POWER_PREFERENCE,
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
