'use client'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Box } from '@react-three/drei'

import { default as AboutConstants } from '@/constants/aboutConstants.json'

function AboutScene() {
  return <Box />
}

export default function AboutCanvas() {
  return (
    <Canvas
      dpr={AboutConstants.SCENE.CANVAS.DPR}
      shadows
      linear
      flat
      gl={{
        antialias: AboutConstants.SCENE.CANVAS.ANTIALIAS,
        powerPreference: AboutConstants.SCENE.CANVAS.POWER_PREFERENCE,
        preserveDrawingBuffer:
          AboutConstants.SCENE.CANVAS.PRESERVE_DRAWING_BUFFER,
      }}
    >
      <Suspense fallback={null}>
        <AboutScene />
      </Suspense>
    </Canvas>
  )
}
