'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

import { IconBlender } from '@/components/r3f/models/icons/IconBlender'
import { IconFigma } from '@/components/r3f/models/icons/IconFigma'

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
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 5]}
      />
      <directionalLight
        position={[0, 0, 5]}
        castShadow
      />
      <ambientLight position={[3, 3, 3]} />
      <IconFigma />
      <IconBlender />
    </Canvas>
  )
}
