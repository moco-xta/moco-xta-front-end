import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Camera from './Camera'
import Lights from './Lights'
import FrontEndDevelopperWithExtraSkillsScene from './FrontEndDevelopperWithExtraSkillsScene'

import { default as heroCanvasConstants } from '@/constants/canvas/home/heroCanvasConstants.json'

export default function FrontEndDevelopperWithExtraSkillsCanvas() {
  return (
    <Canvas
      dpr={heroCanvasConstants.CANVAS.DPR}
      legacy={heroCanvasConstants.CANVAS.LEGACY}
      shadows
      gl={{
        antialias: heroCanvasConstants.CANVAS.GL.ANTIALIAS,
        alpha: heroCanvasConstants.CANVAS.GL.ALPHA,
        powerPreference: heroCanvasConstants.CANVAS.GL.POWER_PREFERENCE,
      }}
    >
      <Camera />
      <OrbitControls />
      <Lights />
      <Suspense fallback={null}>
        <FrontEndDevelopperWithExtraSkillsScene />
      </Suspense>
    </Canvas>
  )
}
