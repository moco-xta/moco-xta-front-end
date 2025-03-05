import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Box, OrbitControls } from '@react-three/drei'

import Lights from './Lights'
import Paris18Scene from './Paris18Scene'
import PostProcessing from './PostProcessing'

import { canvasDefaultValues } from '@/data/paris_18/three/canvasData'

export default function Paris18Canvas() {
  return (
    <Canvas {...canvasDefaultValues}>
      <Lights />
      <OrbitControls
        autoRotate
        autoRotateSpeed={0.3}
        zoomSpeed={4}
        maxDistance={60}
      />
      <Suspense fallback={null}>
        <Paris18Scene />
      </Suspense>
      <PostProcessing />
    </Canvas>
  )
}
