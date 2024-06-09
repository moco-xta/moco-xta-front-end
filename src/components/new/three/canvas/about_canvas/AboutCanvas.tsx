import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { DeviceOrientationControls } from '@react-three/drei'
import { Physics } from '@react-three/rapier'
import { isMobile } from 'react-device-detect'

import AboutScene from './AboutScene'

import { default as aboutConstants } from '@/constants/new/canvas/aboutConstants.json'

export default function AboutCanvas() {
  return (
    <Canvas
      dpr={aboutConstants.CANVAS.DPR}
      shadows
      gl={{
        antialias: aboutConstants.CANVAS.GL.ANTIALIAS,
        alpha: aboutConstants.CANVAS.GL.ALPHA,
        powerPreference: aboutConstants.CANVAS.GL.POWER_PREFERENCE,
      }}
    >
      {isMobile && <DeviceOrientationControls />}
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <Physics debug>
          <AboutScene />
        </Physics>
      </Suspense>
    </Canvas>
  )
}
