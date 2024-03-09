'use client'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Box, SoftShadows } from '@react-three/drei'

import { IntroductionCardCanvasInterface, IntroductionCardSceneInterface } from '@/interfaces/components/r3f/introductionCardInterfaces'

function IntroducitonCardScene({ content }: IntroductionCardSceneInterface) {
  return (
    <Box />
  )
}

export default function IntroductionCardCanvas({ content }: IntroductionCardCanvasInterface) {
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
      <SoftShadows
        size={20}
        samples={10}
      />
      <Suspense fallback={null}>
        <IntroducitonCardScene content={content} />
      </Suspense>
    </Canvas>
  )
}
