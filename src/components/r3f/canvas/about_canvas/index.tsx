'use client'

import React, { Suspense } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { FirstPersonControls } from '@react-three/drei'

import { default as AboutConstants } from '@/constants/aboutConstants.json'

import { Parquet, Trestle } from '../../models/about'

function AboutScene() {
  const { gl } = useThree()
  gl.toneMappingExposure = 1.5

  return (
    <>
      <Parquet />
      <Trestle />
    </>
  )
}

export default function AboutCanvas() {
  return (
    <Canvas
      shadows
      legacy
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
        /* shadowMapEnabled: true */
      }}
    >
      <FirstPersonControls
        makeDefault
        position={[0, 0, 50]}
        lookSpeed={0.1}
      />
      <ambientLight intensity={0.5} />
      <pointLight
        position={[10, 10, 10]}
        intensity={20}
      />
      <Suspense fallback={null}>
        <AboutScene />
      </Suspense>
    </Canvas>
  )
}
