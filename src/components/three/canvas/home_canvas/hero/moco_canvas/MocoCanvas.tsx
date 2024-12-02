import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Camera from './Camera'
import Lights from './Lights'
import MocoScene from './MocoScene'
import PostProcessing from './PostProcessing'

import { default as mocoCanvasConstants } from '@/constants/canvas/home/mocoCanvasConstants.json'

export default function MocoCanvas() {
  return (
    <Canvas
      dpr={mocoCanvasConstants.CANVAS.DPR}
      legacy={mocoCanvasConstants.CANVAS.LEGACY}
      shadows
      gl={{
        antialias: mocoCanvasConstants.CANVAS.GL.ANTIALIAS,
        alpha: mocoCanvasConstants.CANVAS.GL.ALPHA,
        powerPreference: mocoCanvasConstants.CANVAS.GL.POWER_PREFERENCE,
      }}
    >
      <Camera />
      <OrbitControls />
      <Lights />
      <Suspense fallback={null}>
        <MocoScene />
        <PostProcessing />
      </Suspense>
    </Canvas>
  )
}
