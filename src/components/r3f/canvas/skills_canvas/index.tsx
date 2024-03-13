'use client'

import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { Box } from '@react-three/drei'

import { default as SkillsConstants } from '@/constants/skillsConstants.json'

export default function SkillCanvas() {
  return (
    <Canvas
      dpr={SkillsConstants.SCENE.CANVAS.DPR}
      shadows
      linear
      flat
      gl={{
        antialias: SkillsConstants.SCENE.CANVAS.ANTIALIAS,
        powerPreference: SkillsConstants.SCENE.CANVAS.POWER_PREFERENCE,
        preserveDrawingBuffer:
          SkillsConstants.SCENE.CANVAS.PRESERVE_DRAWING_BUFFER,
      }}
    >
      <Suspense fallback={null}>
        <Box />
      </Suspense>
    </Canvas>
  )
}
