import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import HomeScene from './HomeScene'

import { default as homeConstants } from '@/constants/canvas/homeConstants.json'

export default function HomeCanvas() {
  return (
    <Canvas
      dpr={homeConstants.CANVAS.DPR}
      legacy={homeConstants.CANVAS.LEGACY}
      shadows
      gl={{
        antialias: homeConstants.CANVAS.GL.ANTIALIAS,
        alpha: homeConstants.CANVAS.GL.ALPHA,
        powerPreference: homeConstants.CANVAS.GL.POWER_PREFERENCE,
      }}
    >
      <OrbitControls />
      <ambientLight intensity={0.3} />
      {/* <directionalLight /> */}
      <Suspense fallback={null}>
        <HomeScene />
      </Suspense>
    </Canvas>
  )
}
