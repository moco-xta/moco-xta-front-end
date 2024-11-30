import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Camera from './Camera'
import Lights from './Lights'
import ContactScene from './ContactScene'

import { default as contactCanvasConstants } from '@/constants/canvas/home/contactCanvasConstants.json'

export default function ContactCanvas() {
  return (
    <Canvas
      dpr={contactCanvasConstants.CANVAS.DPR}
      legacy={contactCanvasConstants.CANVAS.LEGACY}
      shadows
      gl={{
        antialias: contactCanvasConstants.CANVAS.GL.ANTIALIAS,
        alpha: contactCanvasConstants.CANVAS.GL.ALPHA,
        powerPreference: contactCanvasConstants.CANVAS.GL.POWER_PREFERENCE,
      }}
    >
      <Camera />
      <OrbitControls />
      <Lights />
      <Suspense fallback={null}>
        <ContactScene />
      </Suspense>
    </Canvas>
  )
}
