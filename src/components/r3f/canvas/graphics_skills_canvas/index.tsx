'use client'

import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'

import { default as SkillsConstants } from '@/constants/skillsConstants.json'

import { LogoPhotoshopColored } from '../../models/logos/LogoPhotoshopColored'

export default function GraphicsSkillsCanvas() {
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
      <ambientLight />
      <pointLight position={[1, 1, 1]} />
      <pointLight position={[-1, 1, 1]} />
      <pointLight position={[0, 0, 1]} />
      <Suspense fallback={null}>
        <LogoPhotoshopColored />
      </Suspense>
    </Canvas>
  )
}
