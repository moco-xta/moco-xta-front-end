'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'

import Content from './content'

export default function PerformedWithScene() {
  return (
    <Canvas
      shadows
      legacy
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
    >
      <Content />
    </Canvas>
  )
}
